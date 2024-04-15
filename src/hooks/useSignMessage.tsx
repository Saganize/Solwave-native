import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/reducer';
import { WalletProviderConfig } from '../utils/walletConfig';
import base58 from 'bs58';
import getSharedSecret from '../utils/getSharedSecret';
import encryptPayload from '../utils/encryptPayload';
import { Linking, useWindowDimensions } from 'react-native';
import { sheetState } from '../types/sheetController';
import {
  openWebview,
  setSimulatedTx,
  toggleModal,
  toggleSheetState,
} from '../redux/actions';
import SolwaveContext from '../context';
import InitiateSign from '../utils/api/InitiateSign';
import nacl from 'tweetnacl';

export const useSignMessage = () => {
  const { height } = useWindowDimensions();
  const { apiKey } = React.useContext(SolwaveContext);
  const activeWallet = useSelector((state: RootState) => state.activeWallet);
  const session = useSelector((state: RootState) => state.session);
  const userKey: string = useSelector((state: RootState) => state.userKey);
  const message = useSelector((state: RootState) => state.signMessage);
  const encryptionKeyPair = useSelector(
    (state: RootState) => state.encryptionKeyPair
  );
  const externalWalletPublickey = useSelector(
    (state: RootState) => state.externalWalletPublickey
  );
  const onMessageCallback = useSelector(
    (state: RootState) => state.onMessageCallback
  );
  const dispatch = useDispatch();

  const executeSignMessage = async () => {
    const externalSignMessage = async () => {
      const payload = {
        session,
        message: base58.encode(Buffer.from(message)),
      };

      const sharedSecret = getSharedSecret(
        base58.decode(externalWalletPublickey!),
        base58.decode(encryptionKeyPair!.privateKey)
      );

      const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);
      const params = new URLSearchParams({
        dapp_encryption_public_key: encryptionKeyPair!.publicKey,
        nonce: base58.encode(nonce!),
        redirect_link: 'app://solwave.com/onSignMessage',
        payload: base58.encode(encryptedPayload!),
      });
      Linking.openURL(
        `https://${activeWallet!.host}${activeWallet!.signPath}?${params}`
      );
      dispatch(
        toggleSheetState({ sheetState: sheetState.Loading, isSign: true })
      );
    };

    if (activeWallet!.package === WalletProviderConfig.saganize.package) {
      dispatch(setSimulatedTx(null));
      const response = await InitiateSign(userKey, apiKey);
      dispatch(
        openWebview({
          height: height,
          url: `https://saganize-transaction-website-git-react-native-cdhiraj40.vercel.app/${response.idempotencyId}/transact?access-token=${response.authToken}&api-key=${apiKey}&platform=react-native`,
        })
      );
    } else {
      await externalSignMessage();
    }
  };

  const onMessageSigned = (messageString: string, signature: string) => {
    const signatureBytes = base58.decode(signature);

    const messageBytes = new Uint8Array(Buffer.from(messageString, 'utf8'));
    const publicKey = base58.decode(userKey);

    const result = nacl.sign.detached.verify(
      messageBytes,
      signatureBytes,
      publicKey
    );

    if (result) {
      if (onMessageCallback) {
        onMessageCallback(signature);
      }
    }
    dispatch(toggleModal(false));
  };

  return { executeSignMessage, onMessageSigned };
};

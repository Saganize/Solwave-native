/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import {
  openErrorview,
  setActiveWallet,
  setUserKey,
  toggleOnboarding,
  toggleSheetState,
} from '../redux/actions';
import { sheetState } from '../types/sheetController';
import {
  WalletProviderConfig,
  type WalletConfig,
  SolanaRpcConfigurations,
} from '../utils/walletConfig';
import { Linking } from 'react-native';
import nacl from 'tweetnacl';
import base58 from 'bs58';
import React from 'react';
import decryptPayload from '../utils/decryptPayload';
import getSharedSecret from '../utils/getSharedSecret';
import { useLocalStorage } from './useLocalStorage';
import { getStatusMessage } from '../utils/api/getStatusMessage';
import type { RootState } from '../redux/reducer';

export const useSelectWallet = () => {
  const { storeUserData, isInConnectedWallets, populateFromConnectedWallet } =
    useLocalStorage();
  const dispatch = useDispatch();
  const [deepLink, setDeepLink] = React.useState<string>('');
  const [saganizeKeypair] = React.useState(nacl.box.keyPair());

  const activeWallet = useSelector((state: RootState) => state.activeWallet);

  React.useEffect(() => {
    Linking.addEventListener('url', handleDeepLink);
    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);

  const handleDeepLink = ({ url }: { url: string }) => {
    setDeepLink(url);
  };

  React.useEffect(() => {
    try {
      if (!deepLink) return;

      const url = new URL(deepLink);

      const params = url.searchParams;

      if (params.has('errorCode')) {
        dispatch(openErrorview(getStatusMessage(params.get('errorMessage')!)));
        return;
      }

      const sharedSecret = getSharedSecret(
        base58.decode(params.get(activeWallet!.encryptionKey!)!),
        saganizeKeypair.secretKey
      );

      const connectData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        sharedSecret
      );

      storeUserData({
        encryptionKeypair: saganizeKeypair,
        session: connectData.session,
        userPublicAddress: connectData.public_key,
        externalWalletPublicKey: params.get(activeWallet!.encryptionKey!)!,
        activeWallet: activeWallet!,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
      }
    }
  }, [deepLink]);

  const selectSaganize = async () => {
    try {
      const connectedWallet = await isInConnectedWallets(
        WalletProviderConfig.saganize
      );
      if (connectedWallet) {
        await populateFromConnectedWallet(connectedWallet);
      } else {
        dispatch(toggleSheetState({ sheetState: sheetState.Auth }));
        dispatch(toggleOnboarding(false));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
      }
    }
  };

  const selectExternalWallet = async (walletProvider: WalletConfig) => {
    try {
      dispatch(setUserKey(''));
      dispatch(setActiveWallet(walletProvider));
      const connectedWallet = await isInConnectedWallets(walletProvider);
      if (connectedWallet) {
        await populateFromConnectedWallet(connectedWallet);
        dispatch(toggleSheetState({ sheetState: sheetState.SelectWallet }));
      } else {
        const params = new URLSearchParams({
          dapp_encryption_public_key: base58.encode(saganizeKeypair.publicKey),
          cluster: SolanaRpcConfigurations.devnet.cluster,
          app_url: 'https://saganize.com',
          redirect_link: 'app://solwave.com/onConnect',
        });

        Linking.openURL(
          `https://${walletProvider.host}${walletProvider.connectPath}?${params}`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
      }
    }
  };
  return { selectSaganize, selectExternalWallet };
};

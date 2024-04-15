/* eslint-disable react-hooks/exhaustive-deps */
import { ActivityIndicator, Linking, View } from 'react-native';
import React from 'react';
import { Colors } from '../../utils/theme';
import getSharedSecret from '../../utils/getSharedSecret';
import base58 from 'bs58';
import { useDispatch, useSelector } from 'react-redux';
import decryptPayload from '../../utils/decryptPayload';
import { openErrorview } from '../../redux/actions';
import { useSignMessage, useTransactions } from '../../hooks/index';
import { getStatusMessage } from '../../utils/api/getStatusMessage';
import type { RootState } from '../../redux/reducer';
import loaderStyles from './styles';

const LoadingView = () => {
  const [deepLink, setDeepLink] = React.useState<string>('');
  const dispatch = useDispatch();
  const { populateSignature } = useTransactions();
  const { onMessageSigned } = useSignMessage();
  const encryptionKeyPair = useSelector(
    (state: RootState) => state.encryptionKeyPair
  );
  const externalWalletPublickey = useSelector(
    (state: RootState) => state.externalWalletPublickey
  );
  const message = useSelector((state: RootState) => state.signMessage);
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
      if (/onSignAndSendTransaction/.test(url.pathname)) {
        const sharedSecret = getSharedSecret(
          base58.decode(externalWalletPublickey!),
          base58.decode(encryptionKeyPair!.privateKey)
        );
        const signAndSendTransactionData = decryptPayload(
          params.get('data')!,
          params.get('nonce')!,
          sharedSecret
        );
        populateSignature(signAndSendTransactionData.signature);
        return;
      }
      if (/onSignMessage/.test(url.pathname)) {
        const sharedSecret = getSharedSecret(
          base58.decode(externalWalletPublickey!),
          base58.decode(encryptionKeyPair!.privateKey)
        );
        const signMessageData = decryptPayload(
          params.get('data')!,
          params.get('nonce')!,
          sharedSecret
        );

        if (signMessageData.signature) {
          onMessageSigned(message, signMessageData.signature);
        }
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(error.message));
      }
    }
  }, [deepLink]);
  return (
    <View style={loaderStyles.container}>
      <ActivityIndicator size={20} color={Colors.primaryButtonCTA} />
    </View>
  );
};

export default LoadingView;

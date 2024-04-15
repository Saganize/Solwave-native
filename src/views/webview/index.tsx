import WebView from 'react-native-webview';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openErrorview, setUserKey, toggleModal } from '../../redux/actions';
import { useLocalStorage, useSignMessage, useTransactions } from '../../hooks/';
import { WalletProviderConfig } from '../../utils/walletConfig';
import SolwaveErrorCodes from '../../types/ISolwaveError';
import { WebViewActions, WebViewClosingEvents } from '../../utils/constants';
import WebViewLoader from '../../components/WebViewLoader';
import { useWindowDimensions } from 'react-native';
import type { RootState } from '../../redux/reducer';

const SolwaveWebView = () => {
  const url = useSelector((state: RootState) => state.webviewUrl);
  const tx = useSelector((state: RootState) => state.simulatedTxn);
  const signMessage = useSelector((state: RootState) => state.signMessage);

  const webViewRef = useRef<WebView>(null);
  const dispatch = useDispatch();
  const { storeUserData } = useLocalStorage();
  const { populateSignature, compileSolwaveTx } = useTransactions();
  const { onMessageSigned } = useSignMessage();
  const { height } = useWindowDimensions();

  const handleWebviewClosingEvents = (event: number, message: string) => {
    switch (event) {
      case WebViewClosingEvents.transactionFailed:
        dispatch(openErrorview(message));
        break;
      case WebViewClosingEvents.loginFailure:
        dispatch(openErrorview(message));
        break;
      case WebViewClosingEvents.serverError:
        dispatch(openErrorview(message));
        break;
      case WebViewClosingEvents.userCreationFailure:
        dispatch(openErrorview(message));
        break;
      case WebViewClosingEvents.loginSuccessful:
        dispatch(toggleModal(false));
        break;
      case WebViewClosingEvents.userCreationSuccess:
        dispatch(toggleModal(false));
        break;
    }
  };

  const onMessage = async (payload: any) => {
    let dataPayload;
    try {
      dataPayload = JSON.parse(payload.nativeEvent.data);
      switch (dataPayload.action) {
        case WebViewActions.getEmailAndPublicKey: {
          const publicKey = dataPayload.params.publicKey;
          dispatch(setUserKey(publicKey));
          storeUserData({
            activeWallet: WalletProviderConfig.saganize,
            userPublicAddress: publicKey,
          });

          break;
        }
        case WebViewActions.getMessage: {
          const messageResponse = JSON.stringify({
            action: 'getMessage',
            value: JSON.stringify(signMessage),
          });
          webViewRef.current?.injectJavaScript(
            `window.postMessage(${JSON.stringify(messageResponse)})`
          );
          break;
        }
        case WebViewActions.getTransaction: {
          if (!tx) {
            if (signMessage) {
              break;
            }

            dispatch(openErrorview(SolwaveErrorCodes.GENERIC_ERROR));
            return;
          }

          const compiledTx = await compileSolwaveTx(tx);

          const txResponse = JSON.stringify({
            action: 'getTransaction',
            value: JSON.stringify(compiledTx),
          });
          webViewRef.current?.injectJavaScript(
            `window.postMessage(${JSON.stringify(txResponse)})`
          );
          break;
        }

        case WebViewActions.transactionComplete: {
          await populateSignature(dataPayload.params.signature);
          break;
        }

        case WebViewActions.messageSigned: {
          onMessageSigned(
            dataPayload.params.messageBytes,
            dataPayload.params.signature
          );

          break;
        }

        case WebViewActions.close: {
          handleWebviewClosingEvents(
            dataPayload.params.event,
            dataPayload.params.message
          );
        }
      }
    } catch (e) {
      if (e instanceof Error) {
        dispatch(openErrorview(e.message));
        return;
      }
      dispatch(openErrorview());
    }
  };

  return (
    <WebView
      ref={webViewRef}
      source={{
        uri: url,
      }}
      onMessage={onMessage}
      startInLoadingState
      javaScriptEnabled={true}
      originWhitelist={['*']}
      renderLoading={() => <WebViewLoader sheetHeight={height} />}
      scrollEnabled
      nestedScrollEnabled
    />
  );
};

export default SolwaveWebView;

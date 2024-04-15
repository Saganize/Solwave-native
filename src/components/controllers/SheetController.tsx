/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sheetState } from '../../types/sheetController';
import WalletSelection from '../../views/wallet-selection';
import Transact from '../../views/transact';
import WalletAuth from '../../views/wallet-auth';
import SolwaveWebView from '../../views/webview';
import ErrorView from '../../views/error';
import LoadingView from '../../views/loading';
import NetInfo from '@react-native-community/netinfo';
import { openErrorview } from '../../redux/actions';
import SolwaveErrorCodes from '../../types/ISolwaveError';
import type { RootState } from '../../redux/reducer';
import SignMessage from '../../views/sign';

const SheetController = () => {
  const view = useSelector((state: RootState) => state.sheetState);
  const dispatch = useDispatch();

  //keep track of network state
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        dispatch(openErrorview(SolwaveErrorCodes.NO_INTERNET));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const ViewComponent = React.useMemo(() => {
    switch (view) {
      case sheetState.SelectWallet:
        return WalletSelection;
      case sheetState.Transact:
        return Transact;
      case sheetState.Sign:
        return SignMessage;
      case sheetState.Auth:
        return WalletAuth;
      case sheetState.WebView:
        return SolwaveWebView;
      case sheetState.Error:
        return ErrorView;
      case sheetState.Loading:
        return LoadingView;
      default:
        return WalletSelection;
    }
  }, [view]);
  return <ViewComponent />;
};

export default SheetController;

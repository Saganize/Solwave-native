import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openErrorview,
  openSignView,
  setOnMessageCallback,
  setOnSelectWalletCallback,
  toggleModal,
  toggleSheetState,
  toggleTransactionState,
} from '../redux/actions';
import type { RootState } from '../redux/reducer';
import { sheetState } from '../types/sheetController';
import { useTransactions } from './useTransactions';
import { type Transaction } from '@solana/web3.js';
import SolwaveErrorCodes from '../types/ISolwaveError';
import { transactionState } from '../types/transactionController';
import SolwaveContext from '../context';
import checkNetworkConnectivity from '../utils/checkNetworkConnectivity';

export const useSolwave = () => {
  const modalOpen = useSelector((state: RootState) => state.modalOpen);
  const publicKey = useSelector((state: RootState) => state.userKey);
  const dispatch = useDispatch();
  const { apiKey } = React.useContext(SolwaveContext);
  const { populateTransactionData } = useTransactions();

  const controller = new AbortController();

  const selectWallet = async (
    onWalletSelect?: (publicAddress: string) => void
  ) => {
    dispatch(toggleModal(true));
    if (!(await checkNetworkConnectivity())) {
      dispatch(openErrorview(SolwaveErrorCodes.NO_INTERNET));
      return;
    }
    if (!apiKey) {
      dispatch(openErrorview(SolwaveErrorCodes.NO_API_KEY_PASSED));
      return;
    }
    dispatch(toggleSheetState({ sheetState: sheetState.SelectWallet }));
    if (onWalletSelect) {
      dispatch(setOnSelectWalletCallback(onWalletSelect));
    }
  };

  const close = () => {
    dispatch(toggleModal(false));
    controller.abort();
  };

  const sendTransaction = async (
    transaction: Transaction,
    onTransactionComplete?: (signature: string) => void
  ): Promise<void> => {
    dispatch(toggleSheetState({ sheetState: sheetState.Loading }));
    dispatch(toggleModal(true));
    if (!(await checkNetworkConnectivity())) {
      dispatch(openErrorview(SolwaveErrorCodes.NO_INTERNET));
      return;
    }
    if (!apiKey) {
      dispatch(openErrorview(SolwaveErrorCodes.NO_API_KEY_PASSED));
      return;
    }

    if (publicKey) {
      await populateTransactionData(
        transaction,
        controller.signal,
        onTransactionComplete
      );
      dispatch(toggleTransactionState(transactionState.initiated));
      return;
    } else {
      dispatch(openErrorview(SolwaveErrorCodes.NO_WALLET_SELECTED));
    }
  };

  const signMessage = async (
    message: string,
    onMessageSigned?: (signature: string) => void
  ): Promise<void> => {
    dispatch(
      toggleSheetState({ sheetState: sheetState.Loading, isSign: true })
    );
    dispatch(toggleModal(true));
    if (!(await checkNetworkConnectivity())) {
      dispatch(openErrorview(SolwaveErrorCodes.NO_INTERNET));
      return;
    }
    if (!apiKey) {
      dispatch(openErrorview(SolwaveErrorCodes.NO_API_KEY_PASSED));
      return;
    }
    if (publicKey) {
      if (!message) {
        dispatch(openErrorview(SolwaveErrorCodes.INVALID_MESSAGE));
        return;
      }
      dispatch(openSignView(message));
      if (onMessageSigned) {
        dispatch(setOnMessageCallback(onMessageSigned));
      }
      return;
    } else {
      dispatch(openErrorview(SolwaveErrorCodes.NO_WALLET_SELECTED));
    }
  };
  const getUserKey = async (): Promise<string | null> => {
    if (publicKey) {
      return publicKey;
    }
    return null;
  };

  return {
    selectWallet,
    close,
    modalOpen,
    sendTransaction,
    getUserKey,
    signMessage,
  };
};

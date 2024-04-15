import { createReducer } from '@reduxjs/toolkit';
import {
  initiateUserData,
  openErrorview,
  openSignView,
  openWebview,
  propogateSimulationData,
  setActiveWallet,
  setConnectedWallets,
  setEncryptionPair,
  setExternalPublicKey,
  setOnMessageCallback,
  setOnSelectWalletCallback,
  setSession,
  setSignature,
  setSimulatedTx,
  setTimer,
  setTransactionCallback,
  setUserKey,
  toggleModal,
  toggleOnboardedState,
  toggleOnboarding,
  toggleSheetState,
  toggleTransactionState,
} from './actions';
import { sheetState } from '../types/sheetController';
import { unOnboardedState, onboardedState } from '../types/authController';
import { transactionState } from '../types/transactionController';
import type { UserData } from '../types/SolwaveResponse';
import type { WalletConfig } from '../utils/walletConfig';
import type { SolwaveTransaction } from '../types/ITransactions';
import type { IEncryptionPair, connectedWallets } from '../types/IStore';

type AuthenticatedState = unOnboardedState | onboardedState;

const initialState = {
  userKey: '',
  modalOpen: false,
  isOnboarded: false,
  onSelectWalletCallback: undefined as
    | ((publicAddress: string) => void)
    | undefined,
  sheetState: sheetState.SelectWallet as sheetState,
  onboardedState: unOnboardedState.Onboard as AuthenticatedState,
  transactionState: transactionState.initiated,
  transactionCallback: undefined as ((signature: string) => void) | undefined,
  userData: null as UserData | null,
  sheetHeight: '70%' as `${number}%` | number,
  sheetRadius: 18,
  errorBody: 'Something went wrong',
  activeWallet: null as null | WalletConfig,
  simulatedTxn: null as null | SolwaveTransaction,
  networkFeeText: '',
  simulationStatus: false,
  addFundsCountdown: null as null | number,
  encryptionKeyPair: null as null | IEncryptionPair,
  session: '',
  externalWalletPublickey: '',
  txSignature: '',
  timer: null as null | number,
  webviewUrl: '',
  connectedWallets: [] as connectedWallets[],
  signMessage: '',
  onMessageCallback: undefined as ((signature: string) => void) | undefined,
};

export const solwaveReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleModal, (state, action) => {
      state.modalOpen = action.payload;
    })
    .addCase(setUserKey, (state, action) => {
      state.userKey = action.payload;
    })
    .addCase(toggleSheetState, (state, action) => {
      if (action.payload.isSign) {
        state.sheetHeight = '48%';
      } else if (
        action.payload.sheetState === sheetState.Transact ||
        sheetState.Loading
      ) {
        state.sheetHeight = '65%';
      } else {
        state.sheetHeight = '70%';
      }
      state.sheetRadius = 18;

      state.sheetState = action.payload.sheetState;
    })
    .addCase(toggleOnboarding, (state, action) => {
      state.isOnboarded = action.payload;
    })
    .addCase(toggleOnboardedState, (state, action) => {
      state.onboardedState = action.payload;
    })
    .addCase(toggleTransactionState, (state, action) => {
      if (
        state.sheetState === sheetState.Loading ||
        state.sheetState === sheetState.Transact
      ) {
        state.sheetState = sheetState.Transact;
        state.transactionState = action.payload;
      }
    })
    .addCase(initiateUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(openWebview, (state, action) => {
      state.webviewUrl = action.payload.url;
      state.sheetState = sheetState.WebView;
      state.sheetHeight = action.payload.height;
      state.sheetRadius = 0;
    })
    .addCase(openErrorview, (state, action) => {
      if (action.payload) {
        state.errorBody = action.payload;
      }
      state.sheetHeight = '65%';
      state.sheetRadius = 18;
      state.sheetState = sheetState.Error;
    })
    .addCase(setActiveWallet, (state, action) => {
      state.activeWallet = action.payload;
    })
    .addCase(setSimulatedTx, (state, action) => {
      state.simulatedTxn = action.payload;
    })
    .addCase(propogateSimulationData, (state, action) => {
      state.simulatedTxn = action.payload.tx;
      state.networkFeeText = action.payload.networkFeeText;
      state.simulationStatus = action.payload.status === 'success';
    })
    .addCase(setEncryptionPair, (state, action) => {
      state.encryptionKeyPair = action.payload;
    })
    .addCase(setSession, (state, action) => {
      state.session = action.payload;
    })
    .addCase(setExternalPublicKey, (state, action) => {
      state.externalWalletPublickey = action.payload;
    })
    .addCase(setSignature, (state, action) => {
      state.txSignature = action.payload;
    })
    .addCase(setTimer, (state, action) => {
      state.timer = action.payload;
    })
    .addCase(setConnectedWallets, (state, action) => {
      state.connectedWallets = action.payload;
    })
    .addCase(openSignView, (state, action) => {
      state.signMessage = action.payload;
      state.sheetHeight = '48%';
      state.sheetState = sheetState.Sign;
    })
    .addCase(setTransactionCallback, (state, action) => {
      state.transactionCallback = action.payload;
    })
    .addCase(setOnMessageCallback, (state, action) => {
      state.onMessageCallback = action.payload;
    })
    .addCase(setOnSelectWalletCallback, (state, action) => {
      state.onSelectWalletCallback = action.payload;
    });
});

export type RootState = ReturnType<typeof solwaveReducer>;

import { createAction } from '@reduxjs/toolkit';
import type { onboardedState, unOnboardedState } from '../types/authController';
import type { transactionState } from '../types/transactionController';
import type { UserData } from '../types/SolwaveResponse';
import type { WalletConfig } from '../utils/walletConfig';
import type {
  SimulationData,
  SolwaveTransaction,
} from '../types/ITransactions';
import type {
  IEncryptionPair,
  ToggleSheetPayload,
  WebViewPayload,
  connectedWallets,
} from '../types/IStore';

export const setUserKey = createAction<string>('solwave/setUserKey');

export const toggleModal = createAction<boolean>('solwave/toggleModal');

export const toggleOnboarding = createAction<boolean>(
  'solwave/toggleOnboarding'
);

export const toggleSheetState = createAction<ToggleSheetPayload>(
  'solwave/toggleSheetState'
);

export const setTransactionCallback = createAction<(signature: string) => void>(
  'solwave/setTransactionCallback'
);

export const toggleOnboardedState = createAction<
  onboardedState | unOnboardedState
>('solwave/toggleOnboardedState');

export const toggleTransactionState = createAction<transactionState>(
  'solwave/toggleTransactionState'
);

export const initiateUserData = createAction<UserData>(
  'solwave/initiateUserData'
);

export const openWebview = createAction<WebViewPayload>('solwave/openWebview');
export const openErrorview = createAction<string | undefined>(
  'solwave/openErrorview'
);

export const setActiveWallet = createAction<WalletConfig>(
  'solwave/setActiveWallet'
);
export const setOnSelectWalletCallback = createAction<
  (publicAddress: string) => void
>('solwave/setOnSelectWalletCallback');

export const setSimulatedTx = createAction<SolwaveTransaction | null>(
  'solwave/setSimulaatedTx'
);
export const propogateSimulationData = createAction<SimulationData>(
  'solwave/propogateSimulationData'
);

export const setEncryptionPair = createAction<IEncryptionPair>(
  'solwave/setEncrytpionPair'
);

export const setSession = createAction<string>('solwave/setSession');

export const setExternalPublicKey = createAction<string>(
  'solwave/setExternalPublicKey'
);

export const setTimer = createAction<number | null>('solwave/setTimer');

export const setSignature = createAction<string>('solwave/setSignature');

export const setConnectedWallets = createAction<connectedWallets[]>(
  'solwave/setConnectedWallets'
);

export const openSignView = createAction<string>('solwave/openSignView');

export const setOnMessageCallback = createAction<(signature: string) => void>(
  'solwave/setOnMessageCallback'
);

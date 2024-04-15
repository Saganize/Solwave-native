import type { WalletType } from '../utils/walletConfig';
import type { onboardedState, unOnboardedState } from './authController';
import type { sheetState } from './sheetController';

export type AppState = {
  apiKey: string;
  userKey: string;
  modalOpen: boolean;
  isOnboarded: boolean;
  sheetState: sheetState;
  authenticatedState: unOnboardedState | onboardedState;
};

export type IEncryptionPair = {
  publicKey: string;
  privateKey: string;
};

export type keyMetadata = {
  publicKey: string;
  session?: string;
  encryptionPublicKey?: string;
};

export interface connectedWallets {
  package: string;
  type: WalletType;
  encryptionKeyPair?: IEncryptionPair;
  data: keyMetadata;
}

export type WebViewPayload = {
  height: number;
  url: string;
};

export type ToggleSheetPayload = {
  sheetState: sheetState;
  isSign?: boolean;
};

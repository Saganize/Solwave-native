import type {
  SignaturePubkeyPair,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';

export interface SolwaveTransaction {
  type?: SimulationType;
  data: transactionPayload;
  status?: SolwaveTransactionStatus | null;
}

export interface SolwaveNativeTransaction {
  signatures: Array<SignaturePubkeyPair>;
  instructions: Array<TransactionInstruction>;
  recentBlockHash: string;
}

export interface transactionPayload {
  fees?: number;
  from?: string;
  to?: string;
  lamports?: number;
  transaction: Transaction | SolwaveNativeTransaction;
}

export enum SimulationType {
  TRANSFER = 'transfer',
  OTHER = 'other',
}

export enum SolwaveTransactionStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
}

export type SimulationData = {
  tx: SolwaveTransaction;
  networkFeeText: string;
  status: string;
};

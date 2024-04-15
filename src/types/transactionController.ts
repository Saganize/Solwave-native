export interface TransactionController {
  view:
    | transactionState.addFunds
    | transactionState.complete
    | transactionState.failed
    | transactionState.initiated
    | transactionState.processed
    | transactionState.processing;
}

export enum transactionState {
  initiated = 'initiated',
  addFunds = 'addFunds',
  processing = 'processing',
  processed = 'processed',
  complete = 'complete',
  failed = 'failed',
}

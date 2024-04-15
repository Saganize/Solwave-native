import type { SolwaveTransaction } from '../types/ITransactions';

const stringifyTx = (tx: SolwaveTransaction) => {
  return JSON.stringify({
    ...tx,
    data: JSON.stringify({
      ...tx.data,
      transaction: JSON.stringify({ ...tx.data.transaction }),
    }),
  });
};

export default stringifyTx;

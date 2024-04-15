import { configureStore } from '@reduxjs/toolkit';
import { solwaveReducer } from './reducer';

const store = configureStore({
  reducer: solwaveReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: [
          'simulatedTxn.data.transaction',
          'transactionCallback',
          'onMessageCallback',
          'onSelectWalletCallback',
        ],
        ignoredActionPaths: ['payload.tx.data.transaction', 'payload'],
        warnAfter: 300,
      },
      immutableCheck: false,
    }),
});

export default store;

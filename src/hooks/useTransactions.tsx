/* eslint-disable react-hooks/exhaustive-deps */
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from '@solana/web3.js';
import { SolanaRpc, WalletProviderConfig } from '../utils/walletConfig';
import {
  SimulationType,
  SolwaveTransactionStatus,
  type SolwaveTransaction,
} from '../types/ITransactions';
import { bytesToInt } from '../utils/bytesToInt';
import simulateTransaction from '../utils/api/SimulateTransaction';
import { useDispatch, useSelector } from 'react-redux';
import {
  openErrorview,
  openWebview,
  propogateSimulationData,
  setSignature,
  setTimer,
  setTransactionCallback,
  toggleSheetState,
  toggleTransactionState,
} from '../redux/actions';
import SolwaveErrorCodes from '../types/ISolwaveError';
import { transactionState } from '../types/transactionController';
import React, { useMemo } from 'react';
import base58 from 'bs58';
import encryptPayload from '../utils/encryptPayload';
import getSharedSecret from '../utils/getSharedSecret';
import { Linking, useWindowDimensions } from 'react-native';
import InitiateTransaction from '../utils/api/InitiateTransaction';
import getSignatureStatus from '../utils/getSignatureStatus';
import { sheetState } from '../types/sheetController';
import SolwaveContext from '../context';
import { getStatusMessage } from '../utils/api/getStatusMessage';
import type { RootState } from '../redux/reducer';

export const useTransactions = () => {
  const connection = new Connection(clusterApiUrl(SolanaRpc.devnet));
  const dispatch = useDispatch();
  const { apiKey } = React.useContext(SolwaveContext);
  const { height } = useWindowDimensions();
  const userKey: string = useSelector((state: RootState) => state.userKey);
  const activeWallet = useSelector((state: RootState) => state.activeWallet);
  const simulatedTx = useSelector((state: RootState) => state.simulatedTxn);
  const transactionCallback = useSelector(
    (state: RootState) => state.transactionCallback
  );
  const activeTxnSheet = useSelector(
    (state: RootState) => state.transactionState
  );
  const session = useSelector((state: RootState) => state.session);
  const encryptionKeyPair = useSelector(
    (state: RootState) => state.encryptionKeyPair
  );
  const externalWalletPublickey = useSelector(
    (state: RootState) => state.externalWalletPublickey
  );
  let numberOfTries = 1;

  const getRecentBlockHash = async () => {
    try {
      return await connection.getLatestBlockhash('confirmed');
    } catch (error) {
      return null;
    }
  };

  const getBalance = async (_publicKey: string) => {
    try {
      const publicKey = new PublicKey(_publicKey);
      return await connection.getBalance(publicKey, 'confirmed');
    } catch (error) {
      return null;
    }
  };

  const populateSignature = async (signature: string) => {
    dispatch(toggleSheetState({ sheetState: sheetState.Transact }));
    dispatch(toggleTransactionState(transactionState.processing));
    await getSignatureStatus([signature]);
    if (transactionCallback) {
      transactionCallback(signature);
    }
    dispatch(setSignature(signature));
    dispatch(toggleTransactionState(transactionState.complete));
  };

  const prepareExternalTransaction = async () => {
    try {
      if (simulatedTx) {
        const tx = simulatedTx.data.transaction as Transaction;
        tx.feePayer = new PublicKey(userKey);

        const serializedTx = tx.serialize({
          requireAllSignatures: false,
        });

        const payload = {
          session,
          transaction: base58.encode(serializedTx),
        };

        const sharedSecret = getSharedSecret(
          base58.decode(externalWalletPublickey!),
          base58.decode(encryptionKeyPair!.privateKey)
        );

        const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);
        const params = new URLSearchParams({
          dapp_encryption_public_key: encryptionKeyPair!.publicKey,
          nonce: base58.encode(nonce!),
          redirect_link: 'app://solwave.com/onSignAndSendTransaction',
          payload: base58.encode(encryptedPayload!),
        });
        Linking.openURL(
          `https://${activeWallet!.host}${activeWallet!.transactPath}?${params}`
        );
        dispatch(toggleSheetState({ sheetState: sheetState.Loading }));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
      }
    }
  };

  const triggerTimer = async () => {
    try {
      if (numberOfTries > 1) {
        let start = numberOfTries === 2 ? 3 : 5 * (numberOfTries - 1);
        let _timer = setInterval(handleTimer, 1000);
        function handleTimer() {
          if (start === 0) {
            if (_timer) {
              clearInterval(_timer);
              dispatch(setTimer(null));
            }
          } else {
            dispatch(setTimer(start));
            start--;
          }
        }
      }
      numberOfTries++;
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
      }
    }
  };

  const populateTransactionData = async (
    tx: Transaction,
    signal: AbortSignal,
    onTransactionComplete?: (signature: string) => void
  ) => {
    const recentHash = await getRecentBlockHash();

    try {
      let solwaveTx: SolwaveTransaction | null = null;
      const updateTx = tx;
      updateTx.recentBlockhash = recentHash!.blockhash;
      const instructions = updateTx.instructions;
      for (let i = 0; i < instructions.length; i++) {
        if (
          instructions[i]?.programId.toString() ===
          SystemProgram.programId.toString()
        ) {
          solwaveTx = {
            type: SimulationType.TRANSFER,
            data: {
              from: instructions[i]?.keys[0]?.pubkey.toString(),
              to: instructions[i]?.keys[1]?.pubkey.toString(),
              lamports: bytesToInt(instructions[i]?.data!, 4),
              transaction: updateTx,
            },
          };
        } else {
          solwaveTx = {
            type: SimulationType.OTHER,
            data: {
              transaction: updateTx,
            },
          };
        }
      }

      const response = await simulateTransaction(
        JSON.stringify(tx),
        userKey,
        apiKey,
        signal
      );

      const simulatedTransaction: SolwaveTransaction = {
        ...solwaveTx,
        data: {
          ...solwaveTx?.data!,
          fees: response.networkFee,
        },
        status:
          response.status === SolwaveTransactionStatus.SUCCESS
            ? SolwaveTransactionStatus.SUCCESS
            : SolwaveTransactionStatus.FAILED,
      };

      const networkFeeText =
        simulatedTransaction.data?.fees! < 0.0001
          ? '< 0.0001'
          : simulatedTransaction.data?.fees! === 0.0
          ? '< 0.0001'
          : `${response.networkFee}`;

      dispatch(
        propogateSimulationData({
          networkFeeText,
          tx: simulatedTransaction,
          status: response.status,
        })
      );
      if (onTransactionComplete) {
        dispatch(setTransactionCallback(onTransactionComplete));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
        return;
      }
      dispatch(openErrorview(SolwaveErrorCodes.GENERIC_ERROR));
    }
  };

  const _checkBalance = async () => {
    try {
      const currentBalance = await getBalance(userKey);

      if (currentBalance !== null) {
        if (currentBalance < simulatedTx!.data.lamports! ?? 1) {
          if (activeTxnSheet === transactionState.addFunds) {
            await triggerTimer();
          } else {
            dispatch(toggleTransactionState(transactionState.addFunds));
            numberOfTries++;
          }
        } else {
          if (activeWallet!.package === WalletProviderConfig.saganize.package) {
            const response = await InitiateTransaction(userKey, apiKey);
            dispatch(
              openWebview({
                height: height,
                url: `https://saganize-transaction-website-git-react-native-cdhiraj40.vercel.app/${response.idempotencyId}/transact?access-token=${response.authToken}&api-key=${apiKey}&platform=react-native`,
              })
            );
          } else {
            await prepareExternalTransaction();
          }
        }
      } else {
        dispatch(openErrorview(SolwaveErrorCodes.LESS_BALANCE));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
        return;
      }
      dispatch(openErrorview(SolwaveErrorCodes.GENERIC_ERROR));
    }
  };

  const checkBalance = useMemo(() => _checkBalance, []);

  const compileSolwaveTx = async (tx: SolwaveTransaction) => {
    const nativeTransaction = tx.data.transaction as Transaction;
    return {
      ...tx,
      data: {
        ...tx.data,
        transaction: JSON.stringify({
          signatures: nativeTransaction.signatures,
          instructions: nativeTransaction.instructions,
          recentBlockHash: nativeTransaction.recentBlockhash,
        }),
      },
    };
  };
  return {
    populateTransactionData,
    checkBalance,
    populateSignature,
    compileSolwaveTx,
  };
};

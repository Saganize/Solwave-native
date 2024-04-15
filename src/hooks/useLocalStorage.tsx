/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import base58 from 'bs58';
import { useDispatch, useSelector } from 'react-redux';
import type nacl from 'tweetnacl';
import {
  openErrorview,
  setActiveWallet,
  setConnectedWallets,
  setEncryptionPair,
  setExternalPublicKey,
  setSession,
  setUserKey,
  toggleSheetState,
} from '../redux/actions';
import React from 'react';
import {
  WalletProvider,
  type WalletConfig,
  WalletProviderConfig,
  WalletType,
} from '../utils/walletConfig';
import { sheetState } from '../types/sheetController';
import type {
  IEncryptionPair,
  connectedWallets,
  keyMetadata,
} from '../types/IStore';
import SolwaveErrorCodes from '../types/ISolwaveError';
import type { RootState } from '../redux/reducer';

export const useLocalStorage = () => {
  const dispatch = useDispatch();
  const connectedWallets: connectedWallets[] = useSelector(
    (state: RootState) => state.connectedWallets
  );
  const onSelectWalletCallback = useSelector(
    (state: RootState) => state.onSelectWalletCallback
  );

  const isInConnectedWallets = async (selectedWallet: WalletConfig) => {
    if (connectedWallets) {
      for (let i = 0; i < connectedWallets.length; i++) {
        if (connectedWallets[i]?.package === selectedWallet.package) {
          return connectedWallets[i];
        }
      }
    }
    return false;
  };

  const populateFromConnectedWallet = async (
    connectedWallet: connectedWallets
  ) => {
    try {
      let activeWallet: WalletConfig;
      switch (connectedWallet.package) {
        case WalletProvider.saganize:
          activeWallet = WalletProviderConfig.saganize;
          break;
        case WalletProvider.phantom:
          activeWallet = WalletProviderConfig.phantom;
          break;
        case WalletProvider.solflare:
          activeWallet = WalletProviderConfig.solflare;
          break;
        default:
          activeWallet = WalletProviderConfig.saganize;
          break;
      }
      dispatch(setActiveWallet(activeWallet));

      dispatch(setUserKey(connectedWallet.data.publicKey));
      if (onSelectWalletCallback) {
        onSelectWalletCallback(connectedWallet.data.publicKey);
      }

      await AsyncStorage.setItem(
        '@active_wallet',
        JSON.stringify(activeWallet)
      );

      if (connectedWallet.type === WalletType.otherProvider) {
        const encodedEncryptionKeypair = JSON.stringify({
          publicKey: connectedWallet.encryptionKeyPair!.publicKey,
          privateKey: connectedWallet.encryptionKeyPair!.privateKey,
        });
        await AsyncStorage.setItem(
          '@encryption_keypair',
          encodedEncryptionKeypair
        );
        dispatch(
          setEncryptionPair({
            publicKey: connectedWallet.encryptionKeyPair!.publicKey,
            privateKey: connectedWallet.encryptionKeyPair!.privateKey,
          })
        );
        const userData = JSON.stringify({
          publicKey: connectedWallet.data.publicKey,
          session: connectedWallet.data.session,
          encryptionPublicKey: connectedWallet.data.encryptionPublicKey,
        });
        await AsyncStorage.setItem('@user_data', userData);

        dispatch(setSession(connectedWallet.data.session!));
        dispatch(
          setExternalPublicKey(connectedWallet.data.encryptionPublicKey!)
        );
      } else {
        const userData = JSON.stringify({
          publicKey: connectedWallet.data.publicKey,
        });
        await AsyncStorage.setItem('@user_data', userData);
      }
    } catch (error) {
      dispatch(openErrorview(SolwaveErrorCodes.GENERIC_ERROR));
    }
  };

  const addWalletToConnectedWallets = async (
    selectedWallet: WalletConfig,
    keyData: keyMetadata,
    isSaganize: boolean,
    encryptionKeypair?: IEncryptionPair
  ) => {
    try {
      let newWallet: connectedWallets;
      if (encryptionKeypair) {
        newWallet = {
          package: selectedWallet.package,
          data: keyData,
          type: selectedWallet.type,
          encryptionKeyPair: encryptionKeypair,
        };
      } else {
        newWallet = {
          package: selectedWallet.package,
          data: keyData,
          type: selectedWallet.type,
        };
      }

      const updatedConnectedWallets = [...connectedWallets, newWallet];

      dispatch(setConnectedWallets(updatedConnectedWallets));
      await AsyncStorage.setItem(
        '@connected_wallets',
        JSON.stringify(updatedConnectedWallets)
      );

      if (!isSaganize) {
        dispatch(toggleSheetState({ sheetState: sheetState.SelectWallet }));
      }
    } catch (error) {
      dispatch(openErrorview(SolwaveErrorCodes.GENERIC_ERROR));
    }
  };

  const storeUserData = async ({
    encryptionKeypair,
    session,
    userPublicAddress,
    externalWalletPublicKey,
    activeWallet,
  }: {
    encryptionKeypair?: nacl.BoxKeyPair;
    userPublicAddress: string;
    session?: string;
    externalWalletPublicKey?: string;
    activeWallet: WalletConfig;
  }) => {
    try {
      dispatch(setUserKey(userPublicAddress));
      dispatch(setActiveWallet(activeWallet));

      if (onSelectWalletCallback) {
        onSelectWalletCallback(userPublicAddress);
      }

      await AsyncStorage.setItem(
        '@active_wallet',
        JSON.stringify(activeWallet)
      );
      if (encryptionKeypair) {
        const encodedEncryptionKeypair = JSON.stringify({
          publicKey: base58.encode(encryptionKeypair.publicKey),
          privateKey: base58.encode(encryptionKeypair.secretKey),
        });
        await AsyncStorage.setItem(
          '@encryption_keypair',
          encodedEncryptionKeypair
        );
        dispatch(
          setEncryptionPair({
            publicKey: base58.encode(encryptionKeypair.publicKey),
            privateKey: base58.encode(encryptionKeypair.secretKey),
          })
        );
      }

      if (session && externalWalletPublicKey) {
        const userData = JSON.stringify({
          publicKey: userPublicAddress,
          session: session,
          encryptionPublicKey: externalWalletPublicKey,
        });
        await AsyncStorage.setItem('@user_data', userData);

        dispatch(setSession(session));
        dispatch(setExternalPublicKey(externalWalletPublicKey));
        await addWalletToConnectedWallets(
          activeWallet,
          {
            publicKey: userPublicAddress,
            encryptionPublicKey: externalWalletPublicKey,
            session: session,
          },
          false,
          {
            publicKey: base58.encode(encryptionKeypair!.publicKey),
            privateKey: base58.encode(encryptionKeypair!.secretKey),
          }
        );
      } else {
        const userData = JSON.stringify({
          publicKey: userPublicAddress,
        });
        await AsyncStorage.setItem('@user_data', userData);
        await addWalletToConnectedWallets(
          activeWallet,
          {
            publicKey: userPublicAddress,
          },
          true
        );
      }
    } catch (error) {
      dispatch(openErrorview(SolwaveErrorCodes.GENERIC_ERROR));
    }
  };

  const _populateSaganize = async () => {
    const walletProvider = await AsyncStorage.getItem('@active_wallet');
    const userData = await AsyncStorage.getItem('@user_data');
    const encryptionKeypair = await AsyncStorage.getItem('@encryption_keypair');
    const ConnectedWallets = await AsyncStorage.getItem('@connected_wallets');
    if (ConnectedWallets) {
      const parsedConnectedWallets: connectedWallets[] =
        JSON.parse(ConnectedWallets);

      dispatch(setConnectedWallets(parsedConnectedWallets));
    }
    if (walletProvider && userData) {
      const parsedProvider: WalletConfig = await JSON.parse(walletProvider);
      const parsedUserData = await JSON.parse(userData);
      dispatch(setActiveWallet(parsedProvider));
      dispatch(setUserKey(parsedUserData.publicKey));
      if (parsedUserData.session && parsedUserData.encryptionPublicKey) {
        dispatch(setSession(parsedUserData.session));
        dispatch(setExternalPublicKey(parsedUserData.encryptionPublicKey));
      }
    }
    if (encryptionKeypair) {
      const parsedKeypair: IEncryptionPair = await JSON.parse(
        encryptionKeypair
      );
      dispatch(setEncryptionPair(parsedKeypair));
    }
    return;
  };

  const populateSaganize = React.useCallback(() => {
    _populateSaganize();
  }, []);

  return {
    storeUserData,
    populateSaganize,
    isInConnectedWallets,
    populateFromConnectedWallet,
  };
};

import React, { useMemo } from 'react';
import type { SolwaveInterface, SolwaveProviderProps } from './types/Solwave';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import styles from './styles';
import Heading from './components/Heading';
import SheetController from './components/controllers/SheetController';
import { useLocalStorage, useSolwave } from './hooks';
import SolwaveContext from './context';
import type { RootState } from './redux/reducer';

export const SolwaveProvider: React.FC<SolwaveProviderProps> = ({
  children,
  ApiKey,
}) => {
  const { populateSaganize } = useLocalStorage();
  const { close } = useSolwave();
  const modalOpen = useSelector((state: RootState) => state.modalOpen);
  const sheetHeight = useSelector((state: RootState) => state.sheetHeight);
  const sheetRadius = useSelector((state: RootState) => state.sheetRadius);

  React.useEffect(() => {
    populateSaganize();
  }, [populateSaganize]);

  const value: SolwaveInterface = useMemo(
    () => ({
      apiKey: ApiKey,
    }),
    [ApiKey]
  );

  const onBackButtonPress = () => {
    close();
  };

  const onBackdropPress = () => {
    close();
  };

  return (
    <SolwaveContext.Provider value={value}>
      {children}
      <Modal
        style={[styles.modal]}
        isVisible={modalOpen}
        useNativeDriver
        statusBarTranslucent
        hideModalContentWhileAnimating
        propagateSwipe
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        swipeDirection={'down'}
        backdropOpacity={0}
      >
        <View
          style={[
            styles.container,
            { maxHeight: sheetHeight },
            { borderRadius: sheetRadius },
          ]}
        >
          <Heading />
          <SheetController />
        </View>
      </Modal>
    </SolwaveContext.Provider>
  );
};

export default SolwaveContext;

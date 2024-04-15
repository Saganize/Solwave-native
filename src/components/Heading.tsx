import { Text, View } from 'react-native';
import React from 'react';
import CloseIcon from '../assets/icons/CloseIcon';
import headerStyles from '../styles/header';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { sheetState } from '../types/sheetController';
import Saganize from './Hologram';
import { useSolwave } from '../hooks';
import type { RootState } from '../redux/reducer';

const Heading = () => {
  const view = useSelector((state: RootState) => state.sheetState);
  const { close } = useSolwave();

  const onClosePress = () => {
    close();
  };
  if (view === sheetState.WebView) {
    return <></>;
  }
  return (
    <View style={headerStyles.container}>
      <View>
        <Text style={headerStyles.title}>Solwave</Text>
        <View style={headerStyles.poweredByContainer}>
          <Text style={headerStyles.leftSubTitle}>Powered by</Text>
          <Saganize size="sm" />
        </View>
      </View>
      <TouchableOpacity style={headerStyles.closeIcon} onPress={onClosePress}>
        <CloseIcon height={20} width={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Heading;

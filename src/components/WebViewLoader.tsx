import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../utils/theme';
import { WebviewLoaderStyles } from '../styles';

const WebViewLoader = ({ sheetHeight }: { sheetHeight: number }) => {
  return (
    <View style={[WebviewLoaderStyles.container, { minHeight: sheetHeight }]}>
      <ActivityIndicator size={20} color={Colors.primaryButtonCTA} />
    </View>
  );
};

export default WebViewLoader;

import { ActivityIndicator, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../utils/theme';
import { transactionViewProccessed } from '../../utils/constants';
import { processedStyles } from './styles';

const ProccessedView = () => {
  return (
    <View style={processedStyles.container}>
      <View style={processedStyles.header}>
        <ActivityIndicator size={64} color={Colors.primaryButtonCTA} />
        <Text style={processedStyles.title}>
          {transactionViewProccessed.title}
        </Text>
        <Text style={processedStyles.body}>
          {transactionViewProccessed.body}
        </Text>
      </View>
      <Text style={processedStyles.footer}>
        {transactionViewProccessed.footer}
      </Text>
    </View>
  );
};

export default ProccessedView;

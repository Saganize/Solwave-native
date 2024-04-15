import { ActivityIndicator, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../utils/theme';
import { transactionViewProcessing } from '../../utils/constants';
import { processingStyles } from './styles';

const ProccessingView = () => {
  return (
    <View style={processingStyles.container}>
      <View style={processingStyles.header}>
        <ActivityIndicator size={64} color={Colors.primaryButtonCTA} />
        <Text style={processingStyles.title}>
          {transactionViewProcessing.title}
        </Text>
        <Text style={processingStyles.body}>
          {transactionViewProcessing.body}
        </Text>
      </View>
      <Text style={processingStyles.footer}>
        {transactionViewProcessing.footer}
      </Text>
    </View>
  );
};

export default ProccessingView;

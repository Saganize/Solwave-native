import { View } from 'react-native';
import React from 'react';

import TransactionController from '../../components/controllers/TransactionController';
import { txnStyles } from './styles';

const Transact = () => {
  return (
    <View style={txnStyles.container}>
      <TransactionController />
    </View>
  );
};

export default Transact;

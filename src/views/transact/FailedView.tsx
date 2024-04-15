import { Text, View } from 'react-native';
import React from 'react';
import { transactionViewFailed } from '../../utils/constants';
import Button from '../../components/Button';
import RedCross from '../../assets/icons/RedCross';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/actions';
import { failedStyles } from './styles';

const FailedView = () => {
  const dispatch = useDispatch();
  const onPressClose = () => {
    dispatch(toggleModal(false));
  };
  return (
    <View style={failedStyles.container}>
      <View style={failedStyles.header}>
        <RedCross />
        <Text style={failedStyles.title}>{transactionViewFailed.title}</Text>
        <Text style={failedStyles.body}>{transactionViewFailed.body}</Text>
      </View>
      <Button title={transactionViewFailed.footer} onPress={onPressClose} />
    </View>
  );
};

export default FailedView;

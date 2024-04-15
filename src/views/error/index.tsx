import React from 'react';
import { Text, View } from 'react-native';
import { transactionViewError } from '../../utils/constants';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/actions';
import Error from '../../assets/icons/Error';
import type { RootState } from '../../redux/reducer';
import errorStyles from './styles';

const ErrorView = () => {
  const dispatch = useDispatch();
  const errorBody = useSelector((state: RootState) => state.errorBody);

  const onPressClose = () => {
    dispatch(toggleModal(false));
  };
  return (
    <View style={errorStyles.container}>
      <View style={errorStyles.header}>
        <Error />
        <Text style={errorStyles.title}>{transactionViewError.title}</Text>
        <Text style={errorStyles.body}>{errorBody}</Text>
      </View>
      <Button title={transactionViewError.footer} onPress={onPressClose} />
    </View>
  );
};

export default ErrorView;

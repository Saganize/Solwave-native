import { Text, TouchableOpacity, View, Share, Linking } from 'react-native';
import React from 'react';
import { transactionViewComplete } from '../../utils/constants';
import BlueCheck from '../../assets/icons/BlueCheck';
import Button from '../../components/Button';
import ShareIcon from '../../assets/icons/ShareIcon';
import { useSelector } from 'react-redux';
import { SolanaRpc } from '../../utils/walletConfig';
import type { RootState } from '../../redux/reducer';
import { completeStyles } from './styles';

const CompleteView = () => {
  const signature = useSelector((state: RootState) => state.txSignature);
  const onPressView = () => {
    Linking.openURL(
      `https://explorer.solana.com/tx/${signature}?cluster=${SolanaRpc.devnet}`
    );
  };
  const onPressShare = () => {
    Share.share({
      message: `I just sent a transaction on Solana \nurl : https://explorer.solana.com/tx/${signature}?cluster=${SolanaRpc.devnet}`,
    });
  };
  return (
    <View style={completeStyles.container}>
      <View style={completeStyles.header}>
        <BlueCheck />
        <Text style={completeStyles.title}>
          {transactionViewComplete.title}
        </Text>
        <Text style={completeStyles.body}>{transactionViewComplete.body}</Text>
      </View>
      <View style={completeStyles.footer}>
        <Button
          title={transactionViewComplete.footer}
          style={completeStyles.btn}
          onPress={onPressView}
        />
        <TouchableOpacity
          style={completeStyles.shareContainer}
          onPress={onPressShare}
        >
          <ShareIcon height={18} width={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompleteView;

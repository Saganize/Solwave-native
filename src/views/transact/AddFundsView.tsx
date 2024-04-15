import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Dollars from '../../assets/icons/Dollars';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, addFundsColors } from '../../utils/theme';
import { transactionViewLowBalance } from '../../utils/constants';
import Copy from '../../assets/icons/Copy';
import Button from '../../components/Button';
import { useTransactions } from '../../hooks';
import { useSelector } from 'react-redux';
import shortenAddress from '../../utils/shortenAddress';
import lamportsToSol from '../../utils/lamportsToSol';
import type { RootState } from '../../redux/reducer';
import { addFundsStyles } from './styles';
import { SolwaveNative } from '../../NativeSolwave';

const AddFundsView = () => {
  const { checkBalance } = useTransactions();
  const pubKey = useSelector((state: RootState) => state.userKey);
  const countdown = useSelector((state: RootState) => state.timer);
  const simulatedTx = useSelector((state: RootState) => state.simulatedTxn);
  const [loading, setLoading] = React.useState(false);
  const onPressCopy = () => {
    SolwaveNative.setString(pubKey);
  };
  return (
    <View style={addFundsStyles.container}>
      <View style={addFundsStyles.topContainer}>
        <View style={addFundsStyles.initalDollarContainer}>
          <View style={addFundsStyles.middleDollarContainer}>
            <LinearGradient
              colors={addFundsColors}
              style={addFundsStyles.dollarContainer}
            >
              <Dollars />
            </LinearGradient>
          </View>
        </View>
        <Text style={addFundsStyles.title}>
          {transactionViewLowBalance.title}
        </Text>
        <Text style={addFundsStyles.subTitle}>
          {transactionViewLowBalance.body}
        </Text>
        <TouchableOpacity style={addFundsStyles.copyTile} onPress={onPressCopy}>
          <Text style={addFundsStyles.address}>{shortenAddress(pubKey)}</Text>
          <Copy height={16} width={16} />
        </TouchableOpacity>
      </View>
      <View style={addFundsStyles.bottomContainer}>
        <Text style={addFundsStyles.btnHeader}>
          {`You need ${lamportsToSol(
            simulatedTx!.data.lamports!
          )} Sol for the transact`}
        </Text>
        <Button
          title={countdown ? `Continue in ${countdown}` : 'Continue'}
          onPress={async () => {
            if (!countdown && !loading) {
              setLoading(true);
              await checkBalance();

              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }
          }}
          loading={loading}
          bgColor={
            countdown || loading
              ? Colors.disablePrimaryButton
              : Colors.primaryButtonCTA
          }
        />
      </View>
    </View>
  );
};

export default AddFundsView;

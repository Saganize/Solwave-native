import { Text, View } from 'react-native';
import React from 'react';
import { transactionViewEstimatedCharged } from '../../utils/constants';
import { txnStyles } from './styles';
import Saganize from '../../components/Hologram';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import shortenAddress from '../../utils/shortenAddress';
import { Colors } from '../../utils/theme';
import lamportsToSol from '../../utils/lamportsToSol';
import { useTransactions } from '../../hooks/index';
import type { RootState } from '../../redux/reducer';

const InitiateView = () => {
  const { checkBalance } = useTransactions();
  const [isLoading, setIsLoading] = React.useState(false);

  const activeWallet = useSelector((state: RootState) => state.activeWallet);
  const networkFeeText = useSelector(
    (state: RootState) => state.networkFeeText
  );
  const simulatedTx = useSelector((state: RootState) => state.simulatedTxn);
  const publicKey = useSelector((state: RootState) => state.userKey);
  const simulationStatus = useSelector(
    (state: RootState) => state.simulationStatus
  );

  const onPressPay = async () => {
    setIsLoading(true);
    await checkBalance();
    setIsLoading(false);
  };
  return (
    <>
      <View style={txnStyles.metadataContainer}>
        <View style={txnStyles.topContainer}>
          <View style={txnStyles.simulationContainer}>
            <Text style={txnStyles.title}>
              {transactionViewEstimatedCharged.title}
            </Text>
            {simulatedTx!.data.from ? (
              <>
                {!simulationStatus ? (
                  <Text style={txnStyles.subTitle}>
                    {transactionViewEstimatedCharged.defaultBody}
                  </Text>
                ) : (
                  <></>
                )}
                <Text style={[txnStyles.subTitle, { color: Colors.red }]}>
                  {`${lamportsToSol(simulatedTx!.data.lamports!)} SOL`}
                </Text>
                <Text style={[txnStyles.subTitle, { color: Colors.green }]}>
                  {`from: ${shortenAddress(simulatedTx!.data.from)}`}
                </Text>
                <Text style={[txnStyles.subTitle, { color: Colors.green }]}>
                  {`from: ${shortenAddress(simulatedTx!.data.to!)}`}
                </Text>
              </>
            ) : (
              <Text style={txnStyles.subTitle}>
                {transactionViewEstimatedCharged.defaultBody}
              </Text>
            )}
          </View>
          <View style={txnStyles.feeCardContainer}>
            <Text style={txnStyles.constant}>Network Fee:</Text>
            <View style={txnStyles.feeContainer}>
              <Text style={txnStyles.fee}>{networkFeeText}</Text>
              <Text style={txnStyles.sol}>SOL</Text>
            </View>
          </View>
        </View>
        <View style={txnStyles.appTileContainer}>
          <Text style={txnStyles.appTileTitle}>Pay using</Text>
          <Saganize size="lg" title={activeWallet!.title} />
          <Text style={txnStyles.publicAddress}>
            {shortenAddress(publicKey)}
          </Text>
        </View>
      </View>
      <Button
        title={
          simulatedTx!.data.from
            ? `Pay ${lamportsToSol(simulatedTx!.data.lamports!)} SOL`
            : 'Pay Now'
        }
        onPress={onPressPay}
        loading={isLoading}
      />
    </>
  );
};

export default InitiateView;

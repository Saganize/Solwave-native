import { Text, View } from 'react-native';
import React from 'react';
import signStyles from './styles';
import shortenAddress from '../../utils/shortenAddress';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/reducer';
import Hologram from '../../components/Hologram';
import Button from '../../components/Button';
import { useSignMessage } from '../../hooks';

const SignMessage = () => {
  const publicKey = useSelector((state: RootState) => state.userKey);
  const activeWallet = useSelector((state: RootState) => state.activeWallet);
  const message = useSelector((state: RootState) => state.signMessage);
  const [isLoading, setIsLoading] = React.useState(false);
  const { executeSignMessage } = useSignMessage();

  const onPressSign = async () => {
    setIsLoading(true);
    await executeSignMessage();
    setIsLoading(false);
  };
  return (
    <View style={signStyles.container}>
      <View style={signStyles.messageCardContainer}>
        <Text style={signStyles.constant}>Message:</Text>

        <Text style={signStyles.message}>{message}</Text>
      </View>
      <View style={signStyles.appTileContainer}>
        <Text style={signStyles.appTileTitle}>Sign using</Text>
        <Hologram size="lg" title={activeWallet!.title} />
        <Text style={signStyles.publicAddress}>
          {shortenAddress(publicKey)}
        </Text>
      </View>
      <Button
        title={'Sign Message'}
        onPress={onPressSign}
        loading={isLoading}
      />
    </View>
  );
};

export default SignMessage;

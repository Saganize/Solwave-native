import React from 'react';
import { Colors } from '../../utils/theme';
import Rhombus from '../../assets/icons/Rhombus';
import LinearGradient from 'react-native-linear-gradient';
import { walletAuthStyles } from './styles';
import AuthController from '../../components/controllers/AuthController';

const WalletAuth = () => {
  return (
    <LinearGradient
      colors={[Colors?.authBackground[0]!, Colors?.authBackground[1]!]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={walletAuthStyles.gradient}
    >
      <Rhombus style={walletAuthStyles.leftRhombus} />
      <Rhombus style={walletAuthStyles.rightRhombus} />
      <AuthController />
    </LinearGradient>
  );
};

export default WalletAuth;

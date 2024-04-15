import { Text, View } from 'react-native';
import React from 'react';
import GoogleLogo from '../../assets/GoogleLogo';
import { loginStyles } from './styles';
import {
  authScreenSignUpSubtitle,
  authScreenSignUpTitle,
  connectEmailHeadline,
} from '../../utils/constants';
import { Colors } from '../../utils/theme';
import Button from '../../components/Button';
import { useAuthenticate } from '../../hooks/';

const SignUpView = () => {
  const { createUser } = useAuthenticate();
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.textContainer}>
        <Text style={loginStyles.title}>{authScreenSignUpTitle}</Text>
        <Text style={loginStyles.subTitle}>{authScreenSignUpSubtitle}</Text>
      </View>
      <View style={loginStyles.btnContainer}>
        <Text style={loginStyles.headerText}>{connectEmailHeadline}</Text>
        <Button
          title="Connect with Google"
          Icon={<GoogleLogo height={16} width={16} />}
          bgColor={Colors['white-600']}
          color={Colors['black-500']}
          onPress={createUser}
        />
      </View>
    </View>
  );
};

export default SignUpView;

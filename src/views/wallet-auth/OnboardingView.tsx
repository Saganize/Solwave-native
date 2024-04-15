/* eslint-disable react-native/no-inline-styles */
import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SaganizeLogo from '../../assets/SaganizeLogo';
import { onboardingAuthStyles } from './styles';
import { authScreenSubtitle, authScreenTitle } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { toggleOnboardedState, toggleOnboarding } from '../../redux/actions';
import { onboardedState } from '../../types/authController';
import Button from '../../components/Button';

const OnBoardingView = () => {
  const dispatch = useDispatch();
  const onPressLogin = () => {
    dispatch(toggleOnboarding(true));
    dispatch(toggleOnboardedState(onboardedState.Login));
  };

  const onPressSignup = () => {
    dispatch(toggleOnboarding(true));
    dispatch(toggleOnboardedState(onboardedState.Signup));
  };
  return (
    <View style={onboardingAuthStyles.container}>
      <SaganizeLogo height={50} width={50} />
      <View style={onboardingAuthStyles.bottomContainer}>
        <View style={onboardingAuthStyles.textContainer}>
          <Text style={onboardingAuthStyles.title}>{authScreenTitle}</Text>
          <Text style={onboardingAuthStyles.subTitle}>
            {authScreenSubtitle}
          </Text>
        </View>
        <View style={onboardingAuthStyles.btnContainer}>
          <Button
            title="Create new account"
            onPress={onPressSignup}
            style={{ width: 320 }}
          />

          <View style={onboardingAuthStyles.footerTextContainer}>
            <Text style={onboardingAuthStyles.leftFooterText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={onPressLogin}>
              <Text style={onboardingAuthStyles.rightFooterText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingView;

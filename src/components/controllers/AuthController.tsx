import React from 'react';
import { useSelector } from 'react-redux';
import OnBoardingView from '../../views/wallet-auth/OnboardingView';
import { onboardedState } from '../../types/authController';
import LoginView from '../../views/wallet-auth/LoginView';
import SignUpView from '../../views/wallet-auth/SignUpView';
import type { RootState } from '../../redux/reducer';

const AuthController = () => {
  const isOnboarded = useSelector((state: RootState) => state.isOnboarded);
  const view = useSelector((state: RootState) => state.onboardedState);
  const ViewComponent = React.useMemo(() => {
    if (!isOnboarded) {
      return OnBoardingView;
    }
    switch (view) {
      case onboardedState.Login:
        return LoginView;
      case onboardedState.Signup:
        return SignUpView;
      default:
        return OnBoardingView;
    }
  }, [view, isOnboarded]);
  return <ViewComponent />;
};

export default AuthController;

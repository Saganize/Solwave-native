export interface AuthController {
  view: onboardedState.Login | onboardedState.Signup | unOnboardedState.Onboard;
}

export enum onboardedState {
  Login = 'Login',
  Signup = 'Signup',
}

export enum unOnboardedState {
  Onboard = 'Onboard',
}

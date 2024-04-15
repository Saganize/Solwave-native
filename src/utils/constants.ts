const BaseUrl = 'https://staging.saganize.com/api/v1/';

enum ApiPaths {
  initiateLogin = `${BaseUrl}solwave/auth/initiateLogin/`,
  initiateAccountCreation = `${BaseUrl}solwave/auth/initiateCreateUser/`,
  initiateTransaction = `${BaseUrl}transaction/initiateTransaction/`,
  simulateTransaction = `${BaseUrl}transaction/simulate/`,
  initiateSign = `${BaseUrl}transaction/initiateSignMessage`,
}

enum WalletSelectionScreenTitle {
  recomended = 'RECOMMENED',
  otherWallets = 'OTHER WALLETS',
}
enum WebViewClosingEvents {
  userCreationSuccess = 0,
  loginSuccessful = 1,
  transactionCompleted = 2,
  userCreationFailure = 3,
  loginFailure = 4,
  serverError = 5,
  transactionFailed = 6,
  signingMessageSucces = 7,
}

export enum WebViewActions {
  getEmailAndPublicKey = 'getEmailAndPublicKey',
  getTransaction = 'getTransaction',
  getMessage = 'getMessage',
  transactionComplete = 'transactionComplete',
  messageSigned = 'messageSigned',
  close = 'close',
}

const SaganizeTitle = 'Saganize';
const authScreenTitle = 'One account for \n secure transactions';
const authScreenSubtitle =
  'SAGAnize becomes a secure wallet that store \n all the funds for easy and safe transactions.';

const authScreenSignUpTitle = 'Get Started';
const authScreenSignUpSubtitle = 'Just few easy steps to get you started';

/// AuthView
const authScreenLoginTitle = 'Login';
const authScreenLoginSubtitle = 'Import your account safe and secure';
const connectEmailHeadline = 'Connect with your email address';
const transactionViewEstimatedCharged = {
  title: 'Estimated Charges',
  defaultBody:
    'Unable to simulate the transaction.  If you trust the app then only proceed.',
};

//transactionView
const transactionViewLowBalance = {
  title: 'Add funds to wallet',
  body: 'Your wallet is low on balance. Add some funds',
  buttonCTA: 'Continue',
};

const transactionViewProcessing = {
  title: 'Processing...',
  body: 'Please wait, while we complete your transaction',
  footer: 'Do not press back or close app',
};
const transactionViewProccessed = {
  title: 'Transaction Processed',
  body: 'Confirming your transaction...',
  footer: 'Just another moments while we finish things up',
};

const transactionViewComplete = {
  title: 'Transaction Complete',
  body: 'Check status on Solscan from below',
  footer: 'View Transaction',
};

const transactionViewFailed = {
  title: 'Transaction Failed',
  body: 'Reason for fail',
  footer: 'Close',
};

const transactionViewError = {
  title: 'Error Occured',
  body: 'Error Reason',
  footer: 'Close',
};

const baseHeader = {
  'Content-Type': 'application/json',
};
export {
  WalletSelectionScreenTitle,
  SaganizeTitle,
  authScreenTitle,
  authScreenSubtitle,
  authScreenLoginSubtitle,
  authScreenLoginTitle,
  authScreenSignUpSubtitle,
  authScreenSignUpTitle,
  connectEmailHeadline,
  transactionViewEstimatedCharged,
  transactionViewLowBalance,
  transactionViewProcessing,
  transactionViewProccessed,
  transactionViewComplete,
  transactionViewFailed,
  transactionViewError,
  BaseUrl,
  ApiPaths,
  baseHeader,
  WebViewClosingEvents,
};

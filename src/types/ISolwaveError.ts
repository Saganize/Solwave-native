export default class SolwaveErrorCodes {
  static FIREBASE_NOT_INITIALIZED =
    'Firebase is not initialized. Please initialize Firebase before using the library.';
  static NO_INTERNET =
    'It looks like your device is offline. Please check your internet connection and try again.';
  static GENERIC_ERROR =
    'Something unexpected happened. Please try again later.';
  static VERIFICATION_FAILED =
    'Transaction signature verification failed. Please try again.';
  static LESS_BALANCE =
    "Sorry, we couldn't process your payment due to low wallet balance. Please add funds and try again.";
  static DEEP_LINK_ERROR =
    'We encountered an issue with the selected wallet app. Please try again.';

  static INIT_CREATE_USER_ERROR =
    'Unable to create user account at the moment. Please try again later.';
  static INIT_LOGIN_USER_ERROR =
    'Unable to login user at the moment. Please try again later.';
  static INITIATE_TRANSACTION_ERROR =
    'Unable to initiate transaction at the moment. Please try again later.';
  static INITIATE_SIGN_MESSAGE_ERROR =
    '"Unable to initiate sign message at the moment. Please try again later.';
  static WEBVIEW_ERROR = SolwaveErrorCodes.GENERIC_ERROR;
  static NO_START_EVENT = 'No start event found. Illegal state.';
  static NO_API_KEY_PASSED =
    'No API key passed. Please pass API key to use the library.';
  static NO_TRANSACTION_PASSED =
    'No transaction passed. Please pass transaction to use the function.';
  static INVALID_TRANSACTION =
    'Invalid transaction. Please pass a valid transaction.';
  static NO_WALLET_SELECTED =
    'No wallet selected. Please select a wallet to continue.';
  static NO_USER_FOUND = "This user doesn't exist.";
  static GOOGLE_SIGN_IN = 'Something went wrong with Google Signin';
  static INVALID_MESSAGE = 'Invalid message. Please pass a valid message.';
}

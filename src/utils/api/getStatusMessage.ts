export function getStatusMessage(status: string) {
  switch (status) {
    case 'SAGANIZE_TOO_MANY_REQUESTS':
      return 'Too many requests. Please try again later.';
    case 'apiClient is null - call configure first':
      return 'GoogleSignin not configured. Please configure GoogleSignin before using the library.';
    case 'SAGANIZE_USER_EXISTS':
      return 'User already exists. Please try logging in.';
    case 'SAGANIZE_USER_NOT_FOUND':
      return 'User not found. Please check your email address and try again.';
    case 'SAGANIZE_WALLET_NOT_FOUND':
      return 'User not found. Please check your email address and try again.';
    case 'SAGANIZE_API_KEY_INVALID':
      return 'Something unexpected happened. Please try again later';
    case 'SAGANIZE_LOGIN_FAILED':
      return 'Login failed. Please check your credentials and try again.';
    case 'SAGANIZE_TRANSACTION_ERROR':
      return 'We encountered an issue processing your transaction. Please try again later.';
    case 'SAGANIZE_AUTH_WEBVIEW_EXPIRED':
      return 'Something unexpected happened. Please try again later';
    case 'SAGANIZE_AUTH_WEBVIEW_NOT_FOUND':
      return 'Something unexpected happened. Please try again later';
    default:
      return 'Something unexpected happened. Please try again later';
  }
}

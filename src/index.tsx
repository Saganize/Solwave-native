import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SolwaveProvider } from './Solwave';
import { useSolwave } from './hooks';
import { SolwaveNative } from './NativeSolwave';

function setString(content: string): void {
  SolwaveNative.setString(content);
}

const Solwave = ({
  children,
  ApiKey,
}: {
  children: React.ReactNode;
  ApiKey: string;
}): JSX.Element => {
  return (
    <Provider store={store}>
      <SolwaveProvider ApiKey={ApiKey}>{children}</SolwaveProvider>
    </Provider>
  );
};

export { useSolwave, Solwave, setString };

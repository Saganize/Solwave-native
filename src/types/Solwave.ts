import type React from 'react';

export interface SolwaveInterface {
  apiKey: string;
}

export type SolwaveProviderProps = React.PropsWithChildren<React.ReactNode> & {
  ApiKey: string;
};

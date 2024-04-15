export enum WalletType {
  saganize = 'saganize',
  phantom = 'phantom',
  solflare = 'solflare',
  otherProvider = 'otherProvider',
}

export enum WalletProvider {
  saganize = 'saganize',
  phantom = 'phantom',
  solflare = 'solflare',
}

export type WalletConfig = {
  host: string;
  package: string;
  title: string;
  connectPath?: string;
  transactPath?: string;
  signPath?: string;
  encryptionKey?: string;
  type: WalletType;
};

export const WalletProviderConfig: Record<WalletProvider, WalletConfig> = {
  saganize: {
    host: 'saganize.com',
    package: 'solwave',
    title: 'Saganize',
    type: WalletType.saganize,
  },
  phantom: {
    host: 'phantom.app',
    package: 'phantom',
    title: 'Phantom',
    connectPath: '/ul/v1/connect',
    transactPath: '/ul/v1/signAndSendTransaction',
    signPath: '/ul/v1/signMessage',
    encryptionKey: 'phantom_encryption_public_key',
    type: WalletType.otherProvider,
  },
  solflare: {
    host: 'solflare.com',
    package: 'solflare',
    title: 'Solflare',
    connectPath: '/ul/v1/connect',
    transactPath: '/ul/v1/signAndSendTransaction',
    signPath: '/ul/v1/signMessage',
    encryptionKey: 'solflare_encryption_public_key',
    type: WalletType.otherProvider,
  },
};

export enum SolanaRpc {
  devnet = 'devnet',
}

export interface SolanaRpcConfig {
  rpc: string;
  wss: string;
  cluster: SolanaRpc;
}

export const SolanaRpcConfigurations: Record<SolanaRpc, SolanaRpcConfig> = {
  [SolanaRpc.devnet]: {
    rpc: 'https://api.devnet.solana.com',
    wss: 'ws://api.devnet.solana.com',
    cluster: SolanaRpc.devnet,
  },
};

export const otherWallets = [
  WalletProviderConfig.phantom,
  WalletProviderConfig.solflare,
];

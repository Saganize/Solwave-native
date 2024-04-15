import { Connection, clusterApiUrl } from '@solana/web3.js';
import { SolanaRpc } from './walletConfig';

const getSignatureStatus = async (signatures: string[]) => {
  const connection = new Connection(clusterApiUrl(SolanaRpc.devnet));
  let isConfirmed = false;
  for (let i = 0; i < 20; i++) {
    const result = await connection.getSignatureStatuses(signatures);

    if (result != null) {
      for (const status of result.value) {
        if (status?.confirmationStatus === 'finalized') {
          isConfirmed = true;
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
    if (isConfirmed) {
      break;
    }
  }
  return isConfirmed;
};

export default getSignatureStatus;

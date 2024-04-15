import SolwaveErrorCodes from '../../types/ISolwaveError';
import type {
  SimulateTransactionData,
  SimulateTransactionResponse,
  SolwaveResponse,
} from '../../types/SolwaveResponse';
import { ApiPaths, baseHeader } from '../constants';

async function simulateTransaction(
  tx: string,
  publicKey: string,
  apiKey: string,
  signal: AbortSignal
): Promise<SimulateTransactionData> {
  try {
    if (!apiKey) {
      throw new Error('API Key not initalised');
    }
    const jsonReq = {
      transaction: tx,
      publicKey: publicKey,
    };
    const body = JSON.stringify(jsonReq);

    const options: RequestInit = {
      body: body,
      headers: {
        ...baseHeader,
        api: apiKey,
      },
      method: 'POST',
      signal,
    };

    const response = await fetch(ApiPaths.simulateTransaction, options);

    if (!response.ok) {
      const errorResponse: SolwaveResponse = await response.json();

      throw Error(errorResponse.status);
    }

    const data: SimulateTransactionResponse = await response.json();

    return data.data![0]!;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(SolwaveErrorCodes.GENERIC_ERROR);
    }
  }
}

export default simulateTransaction;

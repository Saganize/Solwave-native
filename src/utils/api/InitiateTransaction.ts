import SolwaveErrorCodes from '../../types/ISolwaveError';
import type {
  InitiateTransactionData,
  InitiateTransactionResponse,
} from '../../types/SolwaveResponse';
import { ApiPaths, baseHeader } from '../constants';

async function InitiateTransaction(
  publicKey: string,
  apiKey: string
): Promise<InitiateTransactionData> {
  try {
    if (!apiKey) {
      throw new Error('API Key not initalised');
    }

    const jsonReq = {
      publicKey,
    };
    const body = JSON.stringify(jsonReq);

    const options: RequestInit = {
      body: body,
      headers: {
        ...baseHeader,
        api: apiKey,
      },
      method: 'POST',
    };
    const response = await fetch(ApiPaths.initiateTransaction, options);

    if (!response.ok) {
      const errorResponse: InitiateTransactionResponse = await response.json();

      throw Error(errorResponse.status);
    }

    const data: InitiateTransactionResponse = await response.json();

    return data?.data![0]!;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(SolwaveErrorCodes.INITIATE_TRANSACTION_ERROR);
    }
  }
}

export default InitiateTransaction;

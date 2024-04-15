import SolwaveErrorCodes from '../../types/ISolwaveError';
import type {
  InitiateSignMessageData,
  InitiateSignMessageResponse,
  InitiateTransactionResponse,
} from '../../types/SolwaveResponse';
import { ApiPaths, baseHeader } from '../constants';

async function InitiateSign(
  publicKey: string,
  apiKey: string
): Promise<InitiateSignMessageData> {
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
    const response = await fetch(ApiPaths.initiateSign, options);

    if (!response.ok) {
      const errorResponse: InitiateTransactionResponse = await response.json();

      throw Error(errorResponse.status);
    }

    const data: InitiateSignMessageResponse = await response.json();

    return data?.data![0]!;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(SolwaveErrorCodes.INITIATE_SIGN_MESSAGE_ERROR);
    }
  }
}

export default InitiateSign;

import SolwaveErrorCodes from '../../types/ISolwaveError';
import type { SolwaveResponse, UserData } from '../../types/SolwaveResponse';
import { ApiPaths, baseHeader } from '../constants';

async function LoginUser(
  email: string,
  tokenId: string,
  apiKey: string
): Promise<UserData> {
  try {
    if (!apiKey) {
      throw new Error('API Key not initalised');
    }

    const jsonReq = {
      email: email,
      verifyToken: tokenId,
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

    const response = await fetch(ApiPaths.initiateLogin, options);

    if (!response.ok) {
      const errorResponse: SolwaveResponse = await response.json();

      throw Error(errorResponse.status);
    }

    const data: SolwaveResponse = await response.json();

    return data?.data![0]!;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(SolwaveErrorCodes.INIT_LOGIN_USER_ERROR);
    }
  }
}

export default LoginUser;

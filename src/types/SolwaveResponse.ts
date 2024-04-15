export interface SolwaveResponse {
  status: string;
  data: null | UserData[]; // Adjust the type according to the actual data structure
  errors?: ApiResponseError[] | null;
}

export interface SimulateTransactionResponse {
  status: string;
  data: null | SimulateTransactionData[]; // Adjust the type according to the actual data structure
  errors?: ApiResponseError[] | null;
}

export interface InitiateTransactionResponse {
  status: string;
  data: InitiateTransactionData[];
  errors: ApiResponseError[] | null; // You may replace `any` with a specific error type if needed
}
export interface InitiateSignMessageResponse {
  status: string;
  data: InitiateSignMessageData[];
  errors: ApiResponseError[] | null; // You may replace `any` with a specific error type if needed
}

export interface InitiateTransactionData {
  idempotencyId: string;
  authToken: string;
  rsaPublicKey: string;
  url: string;
}

export interface InitiateSignMessageData {
  idempotencyId: string;
  authToken: string;
  rsaPublicKey: string;
  url: string;
}

export interface SimulateTransactionData {
  status: string;
  type: number;
  log: string;
  networkFee: number;
}

export interface UserData {
  accessToken: string;
  authIdempotencyId: string;
  email: string;
  url: string;
  userId: string;
}

export interface ApiResponseError {
  message: string;
}

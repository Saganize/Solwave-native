import base58 from 'bs58';
import nacl from 'tweetnacl';
import { Buffer } from 'buffer';
global.Buffer = global.Buffer || Buffer;

const decryptPayload = (
  data: string,
  nonce: string,
  sharedSecret?: Uint8Array
) => {
  try {
    if (!sharedSecret) throw new Error('missing shared secret');

    const decryptedData = nacl.box.open.after(
      base58.decode(data),
      base58.decode(nonce),
      sharedSecret
    );

    if (!decryptedData) {
      throw new Error('Unable to decrypt data, Please try again');
    }
    return JSON.parse(Buffer.from(decryptedData).toString('utf8'));
  } catch (error) {
    throw error;
  }
};

export default decryptPayload;

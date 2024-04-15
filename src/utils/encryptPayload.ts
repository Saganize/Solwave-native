import nacl from 'tweetnacl';

interface IPayload {
  session: string;
  transaction?: string;
  message?: string;
}

const encryptPayload = (payload: IPayload, sharedSecret?: Uint8Array) => {
  if (!sharedSecret) throw new Error('missing shared secret');

  const nonce = nacl.randomBytes(24);

  const encryptedPayload = nacl.box.after(
    Buffer.from(JSON.stringify(payload)),
    nonce,
    sharedSecret
  );

  return [nonce, encryptedPayload];
};

export default encryptPayload;

import nacl from 'tweetnacl';

const getSharedSecret = (
  walletPublicKey: Uint8Array,
  privateKey: Uint8Array
) => {
  return nacl.box.before(walletPublicKey, privateKey);
};

export default getSharedSecret;

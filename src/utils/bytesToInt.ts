export function bytesToInt(bytes: Buffer, startIndex: number): number {
  const numberBytes = bytes.subarray(startIndex);

  const buffer = Buffer.from(numberBytes);

  return buffer.readInt32LE(0); // Assuming little-endian by default
}

const shortenAddress = (adddress: string) => {
  return `${adddress.substring(0, 6)}.........${adddress.substring(
    adddress.length - 5,
    adddress.length
  )}`;
};
export default shortenAddress;

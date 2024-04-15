export default function lamportsToSol(lamports: number) {
  return (lamports / 1000000000).toFixed(8).replace(/\.?0+$/, '');
}

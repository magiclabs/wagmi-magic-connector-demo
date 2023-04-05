import { useNetwork } from "wagmi";

const Network = () => {
  const { chain, chains } = useNetwork();
  console.log(chain);

  return (
    <div>
      {chain && <div>Connected to {chain.name}</div>}
      {chains && (
        <div>Available chains: {chains.map((chain) => chain.name)}</div>
      )}
    </div>
  );
};

export default Network;

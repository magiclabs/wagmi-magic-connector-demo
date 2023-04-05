import { useAccount, useEnsName, useDisconnect } from "wagmi";

const Wallet = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  return (
    <div className="wallet-container">
      <div>
        <div>Connected to {ensName ?? address}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    </div>
  );
};

export default Wallet;

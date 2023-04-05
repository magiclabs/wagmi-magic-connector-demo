import { useAccount, useEnsName, useDisconnect } from "wagmi";
import Balance from "./Balance";

const Wallet = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  return (
    <div className="wallet-container">
      <div>
        <div>Connected to {ensName ?? address}</div>
        <Balance address={address} />
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    </div>
  );
};

export default Wallet;

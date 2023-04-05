import { useAccount, useEnsName, useDisconnect } from "wagmi";
import Balance from "./Balance";
import SignMessage from "./SignMessage";
import Network from "./Network";

const Wallet = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  return (
    <div className="wallet-container">
      <div>
        <div>Connected to {ensName ?? address}</div>
        <Network />
        <Balance address={address} />
        <SignMessage />
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    </div>
  );
};

export default Wallet;

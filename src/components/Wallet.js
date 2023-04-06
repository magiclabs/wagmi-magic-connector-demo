import {
  useAccount,
  useEnsName,
  useDisconnect,
  useConnect,
  useNetwork,
} from "wagmi";
import Balance from "./Balance";
import SignMessage from "./SignMessage";
import SendTransaction from "./SendTransaction";

const Wallet = () => {
  const { address, connector: activeConnector, status } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  const { data, connectors } = useConnect();
  const { chain, chains } = useNetwork();

  console.log("Connectors: ", connectors);
  console.log("Active Connector: ", activeConnector);
  console.log("Data: ", data);
  console.log("Chains: ", chains);

  return (
    <div className="wallet-container">
      <div>
        <div>Connected to {ensName ?? address}</div>
        <div>Connector: {activeConnector?.name}</div>
        <div>Status: {status}</div>
        {chain && <div>Chain: {chain?.name}</div>}
        <Balance address={address} />
        <SendTransaction />
        <SignMessage />
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    </div>
  );
};

export default Wallet;

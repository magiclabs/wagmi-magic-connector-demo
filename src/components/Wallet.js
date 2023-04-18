import {
  useAccount,
  useEnsName,
  useDisconnect,
  useConnect,
  useNetwork,
  useProvider,
  useSigner,
} from "wagmi";
import Balance from "./Balance";
import SignMessage from "./SignMessage";
import SendTransaction from "./SendTransaction";
import StatusCircle from "./StatusCircle";
import Divider from "./Divider";

const Wallet = () => {
  const { address, connector: activeConnector, status } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  const { data, connectors } = useConnect();
  const { chain, chains } = useNetwork();
  const provider = useProvider();
  const { data: signer } = useSigner();

  console.log("Connectors: ", connectors);
  console.log("Active Connector: ", activeConnector);
  console.log("Data: ", data);
  console.log("Chains: ", chains);
  console.log("Provider: ", provider);
  console.log("Signer: ", signer);

  return (
    <div className="wallet-container">
      <div>Connector: {activeConnector?.name}</div>
      <div className="status-container">
        <div>Status:</div> <StatusCircle status={status} />
      </div>

      {chain && <div>Chain: {chain?.name}</div>}
      <Divider />
      <div>Connected to {ensName ?? address}</div>
      <Balance address={address} />
      <Divider />
      {/* <SendTransaction /> */}
      <SignMessage />
      <Divider />
      <button className="disconnect-button" onClick={() => disconnect()}>
        Disconnect
      </button>
    </div>
  );
};

export default Wallet;

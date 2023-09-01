import { useAccount, useEnsName, useDisconnect, useNetwork } from "wagmi";
import Balance from "./Balance";
import SignMessage from "./SignMessage";
// import SendTransaction from "./SendTransaction";
import StatusCircle from "./StatusCircle";
import Divider from "./Divider";

const Wallet = ({ redirectResult }) => {
  const { address, connector: activeConnector, status } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  return (
    <div className="wallet-container">
      <div>Connector: {activeConnector?.name}</div>
      <div className="status-container">
        <div>Status:</div> <StatusCircle status={status} />
      </div>

      {chain && <div>Chain: {chain?.name}</div>}
      <Divider />
      <div>Connected to {ensName ?? address}</div>
      <div>Email: {redirectResult.oauth}</div>
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

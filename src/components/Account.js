import { useAccount } from "wagmi";
import SignIn from "./SignIn";
import Wallet from "./Wallet";

const Account = ({ magicConnector }) => {
  const { isConnected } = useAccount();

  return (
    <div className="account-container">
      {!isConnected ? <SignIn magicConnector={magicConnector} /> : <Wallet />}
    </div>
  );
};

export default Account;

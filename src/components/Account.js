import { useAccount } from "wagmi";
import SignIn from "./SignIn";
import Wallet from "./Wallet";

const Account = () => {
  const { isConnected } = useAccount();

  return (
    <div className="account-container">
      {!isConnected ? <SignIn /> : <Wallet />}
    </div>
  );
};

export default Account;

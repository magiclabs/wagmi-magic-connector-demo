import { useAccount } from "wagmi";
import SignIn from "./SignIn";
import Wallet from "./Wallet";
import { useState } from "react";

const Dashboard = () => {
  const { isConnected } = useAccount();
  const [redirectResult, setRedirectResult] = useState("");

  return (
    <div className="App">
      <h1>
        Magic <span className="normal-weight">+</span> Wagmi
      </h1>
      {!isConnected ? (
        <SignIn setRedirectResult={setRedirectResult} />
      ) : (
        <Wallet redirectResult={redirectResult} />
      )}
    </div>
  );
};

export default Dashboard;

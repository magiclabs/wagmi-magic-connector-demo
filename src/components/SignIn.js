import { useConnect } from "wagmi";

const SignIn = ({ magicConnector }) => {
  const { connect } = useConnect({
    connector: magicConnector,
  });

  return (
    <div>
      <button onClick={() => connect({ magicConnector })}>
        Connect Wallet
      </button>
    </div>
  );
};

export default SignIn;

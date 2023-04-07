import { useConnect } from "wagmi";

const SignIn = ({ magicConnector }) => {
  const { connect } = useConnect({
    connector: magicConnector,
  });

  return (
    <div className="sign-in-container">
      <button
        className="sign-in-button primary-button"
        onClick={() => connect({ magicConnector })}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;

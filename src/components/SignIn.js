import { useConnect } from "wagmi";

const SignIn = () => {
  const { connect, connectors, isLoading, isIdle } = useConnect();

  return (
    <div className="sign-in-container">
      <button
        className="sign-in-button primary-button"
        onClick={() => connect({ connector: connectors[0] })}
      >
        {isLoading ? "Loading..." : isIdle ? "Connect" : "Connecting..."}
      </button>
    </div>
  );
};

export default SignIn;

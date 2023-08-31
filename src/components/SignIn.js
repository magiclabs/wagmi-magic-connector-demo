import { useConnect } from "wagmi";

const SignIn = () => {
  const { connect, connectors } = useConnect();

  return (
    <div className="sign-in-container">
      <button
        className="sign-in-button primary-button"
        onClick={() => connect({ connector: connectors[0] })}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;

import { useConnect } from "wagmi";
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const magic = new Magic("pk_live_D34413A845CE453E", {
  extensions: [new OAuthExtension()],
});

const SignIn = ({ setRedirectResult }) => {
  const { connect, connectors, isLoading, isIdle } = useConnect();
  const location = useLocation();

  const getRedirect = async () => {
    try {
      const result = await magic.oauth.getRedirectResult();
      setRedirectResult(result);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const queryString = location.search;
    if (queryString) {
      getRedirect();
    }
  }, [location.search]);

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

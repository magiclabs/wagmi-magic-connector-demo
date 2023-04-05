import { useConnect } from "wagmi";
import { MagicAuthConnector } from "@everipedia/wagmi-magic-connector";

const connector = new MagicAuthConnector({
  options: {
    apiKey: "pk_live_89B21C65CB6370D2",
    isDarkMode: true,
    oauthOptions: {
      providers: ["google", "github"],
    },
  },
});

const SignIn = () => {
  const { connect } = useConnect({
    connector,
  });

  return (
    <div>
      <button onClick={() => connect()}>Connect Wallet</button>
    </div>
  );
};

export default SignIn;

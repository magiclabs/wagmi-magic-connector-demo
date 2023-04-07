import {
  configureChains,
  createClient,
  WagmiConfig,
  goerli,
  useAccount,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MagicAuthConnector } from "@everipedia/wagmi-magic-connector";
import SignIn from "./components/SignIn";
import Wallet from "./components/Wallet";

const magicConnector = new MagicAuthConnector({
  chains: [goerli],
  options: {
    apiKey: "pk_live_89B21C65CB6370D2",
    isDarkMode: true,
    // oauthOptions: {
    //   providers: ["google", "github"],
    // },
  },
});

const { provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  connectors: [magicConnector],
  provider,
  webSocketProvider,
});

function App() {
  const { isConnected } = useAccount();

  return (
    <WagmiConfig client={client}>
      <div className="App">
        <h1>
          Magic <span className="normal-weight">+</span> Wagmi
        </h1>
        {!isConnected ? <SignIn magicConnector={magicConnector} /> : <Wallet />}
      </div>
    </WagmiConfig>
  );
}

export default App;

import { configureChains, createClient, WagmiConfig, goerli } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MagicAuthConnector } from "@everipedia/wagmi-magic-connector";
import Account from "./components/Account";

const magicConnector = new MagicAuthConnector({
  chains: [goerli],
  options: {
    apiKey: "pk_live_89B21C65CB6370D2",
    isDarkMode: true,
    oauthOptions: {
      providers: ["google", "github"],
    },
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
  return (
    <WagmiConfig client={client}>
      <div className="App">
        <h1>Magic + Wagmi</h1>
        <Account magicConnector={magicConnector} />
      </div>
    </WagmiConfig>
  );
}

export default App;

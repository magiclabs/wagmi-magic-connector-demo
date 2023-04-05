import {
  configureChains,
  createClient,
  WagmiConfig,
  mainnet,
  goerli,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Account from "./components/Account";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

function App() {
  return (
    <WagmiConfig client={client}>
      <div className="App">
        <h1>Magic + Wagmi</h1>
        <Account />
      </div>
    </WagmiConfig>
  );
}

export default App;

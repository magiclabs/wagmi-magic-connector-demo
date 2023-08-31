import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MagicAuthConnector } from "@magiclabs/wagmi-connector";
import Dashboard from "./components/Dashboard";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MagicAuthConnector({
      chains,
      options: {
        apiKey: "pk_live_D34413A845CE453E",
        isDarkMode: true,
        /* Make sure to enable OAuth options from magic dashboard */
        oauthOptions: {
          providers: ["google", "twitter", "github"],
        },
        magicSdkConfiguration: {
          network: {
            rpcUrl: "https://rpc.ankr.com/eth",
            chainId: 1,
          },
        },
      },
    }),
  ],
});

function App() {
  return (
    <WagmiConfig config={config}>
      <Dashboard />
    </WagmiConfig>
  );
}

export default App;

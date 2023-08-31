import { configureChains, createConfig, WagmiConfig, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MagicAuthConnector } from "@magiclabs/wagmi-connector";
import SignIn from "./components/SignIn";
import Wallet from "./components/Wallet";
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import { useEffect } from "react";
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

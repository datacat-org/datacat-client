import { createPublicClient, createWalletClient, custom } from "viem";
import { http, createConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

export const config = createConfig({
  chains: [polygonMumbai],
  transports: {
    [polygonMumbai.id]: http(),
  },
});

export const publicClient = createPublicClient({
  chain: polygonMumbai,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: polygonMumbai,
  transport: custom(window.ethereum),
});

// // JSON-RPC Account
// export const [account] = await walletClient.getAddresses();

export const getAccount = async () => {
  const [account] = await walletClient.getAddresses();
  console.log("account", account);
  return account;
};

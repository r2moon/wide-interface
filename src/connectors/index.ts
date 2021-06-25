import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import getLibrary from "../utils/getLibrary";

import { NetworkConnector } from "./NetworkConnector";

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;

if (typeof INFURA_KEY === "undefined") {
  throw new Error(
    `REACT_APP_INFURA_KEY must be a defined environment variable`
  );
}

const NETWORK_URLS: {
  [chainId: number]: string;
} = {
  137: "https://rpc-mainnet.matic.network",
  80001: "https://rpc-mumbai.matic.today",
};

const SUPPORTED_CHAIN_IDS = [137, 80001];

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 1,
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  if (!networkLibrary) {
    networkLibrary = getLibrary(network.provider);
  }
  return networkLibrary;
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

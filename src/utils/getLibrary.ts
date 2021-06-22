import { Web3Provider } from "@ethersproject/providers";

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(
    provider,
    typeof provider.chainId === "number"
      ? provider.chainId
      : typeof provider.chainId === "string"
      ? parseInt(provider.chainId, 10)
      : "any"
  );
  library.pollingInterval = 15000;
  return library;
}

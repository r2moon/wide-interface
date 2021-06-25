import { AbstractConnector } from "@web3-react/abstract-connector";
import INJECTED_ICON_URL from "assets/images/arrow-right.svg";
import METAMASK_ICON_URL from "assets/images/metamask.svg";
import { injected } from "../connectors";

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconURL: string;
  description: string;
  href: string | null;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: "Injected",
    iconURL: INJECTED_ICON_URL,
    description: "Injected web3 provider.",
    href: null,
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: "MetaMask",
    iconURL: METAMASK_ICON_URL,
    description: "Easy-to-use browser extension.",
    href: null,
  },
  TRUSTWALLET: {
    connector: injected,
    name: "Trust Wallet",
    iconURL: METAMASK_ICON_URL,
    description: "Easy-to-use browser extension.",
    href: null,
  },
  WALLETCONNECT: {
    connector: injected,
    name: "Wallet Connect",
    iconURL: METAMASK_ICON_URL,
    description: "Easy-to-use browser extension.",
    href: null,
  },
};

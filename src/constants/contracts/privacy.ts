import { Currency, Address } from "types";
import { MATIC } from "../currencies";

export type PrivacyTransferContract = {
  currency: Currency;
  amount: number;
  network: number;
  address: Address;
};
export const privacyTransferContracts: PrivacyTransferContract[] = [
  // Mumbai Testnets
  {
    currency: MATIC,
    amount: 0.1,
    network: 80001,
    address: {
      80001: "0xE17eE4b26fCF2f418beA031E6348f9de2af7444C",
    },
  },
  {
    currency: MATIC,
    amount: 1,
    network: 80001,
    address: {
      80001: "0xE17eE4b26fCF2f418beA031E6348f9de2af7444C",
    },
  },
  {
    currency: MATIC,
    amount: 10,
    network: 80001,
    address: {
      80001: "0xE17eE4b26fCF2f418beA031E6348f9de2af7444C",
    },
  },
  {
    currency: MATIC,
    amount: 100,
    network: 80001,
    address: {
      80001: "0xE17eE4b26fCF2f418beA031E6348f9de2af7444C",
    },
  },
];

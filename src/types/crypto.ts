export type Address = { [network: number]: string };
export type Currency = {
  symbol: string;
  address: Address;
  decimals: number;
  isNativeCurrency?: boolean;
};

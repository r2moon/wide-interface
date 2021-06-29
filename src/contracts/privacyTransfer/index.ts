/* eslint-disable class-methods-use-this */
/* eslint-disable no-redeclare */
import { ethers } from "ethers";
import { Currency } from "types";
import {
  PrivacyTransferContract,
  privacyTransferContracts,
} from "constants/contracts/privacy";

const { toHex, generatePrivateNote } = require("./utils.js");

const PrivacyTransferAbi = require("../abis/privacyTransfer.json");

export default class PrivacyTransfer {
  private contractInfo: PrivacyTransferContract;

  private provider: ethers.providers.Provider;

  private contract: ethers.Contract;

  constructor(
    currency: Currency,
    amount: number,
    chainId: number,
    provider: ethers.providers.Provider
  ) {
    this.provider = provider;
    console.log(this.provider);
    // this.provider = new ethers.providers.JsonRpcProvider(
    //   "https://rpc-mumbai.matic.today"
    // );
    const contractInfo = privacyTransferContracts.find(
      (item: PrivacyTransferContract) =>
        item.currency.symbol === currency.symbol &&
        item.amount === amount &&
        item.network === chainId
    );
    if (contractInfo) {
      this.contractInfo = contractInfo;
      this.contract = new ethers.Contract(
        this.contractInfo.address,
        PrivacyTransferAbi,
        this.provider
      );
    } else {
      throw Error("No Contract Info exists");
    }
  }

  generatePrivateNote(currency: Currency, amount: number, chainId: number) {
    return generatePrivateNote(currency.symbol, amount, chainId);
  }

  async deposit(privateNote: any) {
    if (this.contractInfo.currency.isNativeCurrency) {
      await this.contract.deposit(toHex(privateNote.deposit.commitment), {
        value: ethers.utils.parseEther(this.contractInfo.amount.toString()),
      });
    }
  }
}

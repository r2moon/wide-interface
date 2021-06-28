import { useState, useCallback, useMemo, useEffect } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import {
  FlexContainer,
  DropDown,
  RadioSelector,
  ConnectButton,
  Button,
} from "components";
import {
  privacyTransferContracts,
  PrivacyTransferContract,
} from "constants/contracts/privacy";
import { Currency } from "types";
import { network } from "connectors";
import { getUniqueArray } from "utils/array";
import PrivacyNotesModal from "./PrivacyNotesModal";

const StyledLabel = styled.div`
  color: ${({ theme }) => theme.colors.text2};
  font-size: 24px;
  margin-bottom: 7px;
`;

const StyledGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export default () => {
  const { active, account, chainId } = useWeb3React();

  const [currencySelected, setCurrencySelected] = useState<number>(0);
  const [amountSelected, setAmountSelected] = useState<number>(0);

  const currencies = useMemo(
    () =>
      getUniqueArray(
        privacyTransferContracts.filter(
          (item) => item.network === (chainId ?? network.currentChainId)
        ),
        (a: PrivacyTransferContract, b: PrivacyTransferContract) =>
          a.currency.symbol === b.currency.symbol
      ).map((item: PrivacyTransferContract) => item.currency),
    [chainId]
  );

  const amounts = useMemo(
    () =>
      privacyTransferContracts
        .filter(
          (item) =>
            item.network === (chainId ?? network.currentChainId) &&
            item.currency.symbol === currencies[currencySelected].symbol
        )
        .map((item) => item.amount),
    [chainId, currencies, currencySelected]
  );

  const [privacyNotesOpend, setPrivacyNotesOpend] = useState<boolean>(false);

  useEffect(() => {
    if (currencySelected >= currencies.length) {
      setCurrencySelected(0);
    }
  }, [currencySelected, currencies]);

  useEffect(() => {
    if (amountSelected >= amounts.length) {
      setAmountSelected(0);
    }
  }, [amountSelected, amounts]);

  const deposit = useCallback(() => {
    setPrivacyNotesOpend(true);
  }, []);

  return (
    <FlexContainer
      direction="column"
      alignItems="flex-start"
      margin="45px 65px"
    >
      <StyledGroup>
        <StyledLabel>Currency</StyledLabel>
        <DropDown
          options={currencies.map((currency) => currency.symbol)}
          placeholder="Select a token"
          selected={currencySelected}
          onChange={setCurrencySelected}
        />
      </StyledGroup>
      <StyledGroup>
        <StyledLabel>Amount</StyledLabel>
        <RadioSelector
          options={amounts.map(
            (item) => `${item} ${currencies[currencySelected].symbol}`
          )}
          selected={amountSelected}
          onChange={setAmountSelected}
        />
      </StyledGroup>
      {(!account || !active) && <ConnectButton width="100%" />}
      {account && active && (
        <Button variant="primary" width="100%" onClick={deposit}>
          DEPOSIT
        </Button>
      )}
      <PrivacyNotesModal
        isOpen={privacyNotesOpend}
        onDismiss={() => setPrivacyNotesOpend(false)}
      />
    </FlexContainer>
  );
};

import { useState, useCallback } from "react";
import styled from "styled-components";
import { FlexContainer, DropDown } from "components";

const StyledLabel = styled.div`
  font-size: 1rem;
`;

const StyledTokenSelector = styled.div`
  display: flex;
  border: 1px solid black;
`;

const Deposit = () => {
  // const [offerCurrency, setOfferCurrency] = useState<Currency | undefined>(
  //   currencies.terraTestnet[0]
  // );
  // const [askCurrency, setAskCurrency] = useState<Currency | undefined>();

  // const exchangeCurrencies = useCallback(() => {
  //   setOfferCurrency(askCurrency);
  //   setAskCurrency(offerCurrency);
  // }, [offerCurrency, askCurrency]);

  const [selected, setSelected] = useState<number>(0);
  const options = ["ETH", "DAI", "USDC"];

  return (
    <FlexContainer direction="column" alignItems="flex-start">
      <StyledLabel>Token</StyledLabel>
      <DropDown
        options={options}
        placeholder="Select a token"
        selected={selected}
        onChange={setSelected}
      />
      <StyledLabel>Amount</StyledLabel>
      <DropDown
        options={options}
        placeholder="Select an amount"
        selected={selected}
        onChange={setSelected}
      />
    </FlexContainer>
  );
};

export default Deposit;

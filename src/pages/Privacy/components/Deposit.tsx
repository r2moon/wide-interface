import { useState, useCallback } from "react";
import styled from "styled-components";
import { FlexContainer, DropDown, RadioSelector, Button } from "components";

const StyledLabel = styled.div`
  color: ${({ theme }) => theme.colors.text2};
  font-size: 24px;
  margin-bottom: 7px;
`;

const StyledTokenSelector = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Deposit = () => {
  const [tokenSelected, setTokenSelected] = useState<number>(0);
  const [amountSelected, setAmountSelected] = useState<number>(0);
  const tokens = ["ETH", "DAI", "USDC"];
  const amounts = ["0.1 ETH", "1 ETH", "10 ETH", "100 ETH"];

  return (
    <FlexContainer
      direction="column"
      alignItems="flex-start"
      margin="45px 65px"
    >
      <StyledTokenSelector>
        <StyledLabel>Token</StyledLabel>
        <DropDown
          options={tokens}
          placeholder="Select a token"
          selected={tokenSelected}
          onChange={setTokenSelected}
        />
      </StyledTokenSelector>
      <StyledTokenSelector>
        <StyledLabel>Amount</StyledLabel>
        <RadioSelector
          options={amounts}
          selected={amountSelected}
          onChange={setAmountSelected}
        />
      </StyledTokenSelector>
      <Button variant="primary">CONNECT</Button>
    </FlexContainer>
  );
};

export default Deposit;

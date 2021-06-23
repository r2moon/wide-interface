import { useState } from "react";
import styled from "styled-components";
import {
  FlexContainer,
  DropDown,
  RadioSelector,
  ConnectButton,
} from "components";

const StyledLabel = styled.div`
  color: ${({ theme }) => theme.colors.text2};
  font-size: 24px;
  margin-bottom: 7px;
`;

const StyledGroup = styled.div`
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
      <StyledGroup>
        <StyledLabel>Token</StyledLabel>
        <DropDown
          options={tokens}
          placeholder="Select a token"
          selected={tokenSelected}
          onChange={setTokenSelected}
        />
      </StyledGroup>
      <StyledGroup>
        <StyledLabel>Amount</StyledLabel>
        <RadioSelector
          options={amounts}
          selected={amountSelected}
          onChange={setAmountSelected}
        />
      </StyledGroup>
      <ConnectButton width="100%" />
    </FlexContainer>
  );
};

export default Deposit;

import { useState, useCallback } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import {
  FlexContainer,
  DropDown,
  RadioSelector,
  ConnectButton,
  Button,
} from "components";
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

const Deposit = () => {
  const { active, account } = useWeb3React();

  const [tokenSelected, setTokenSelected] = useState<number>(0);
  const [amountSelected, setAmountSelected] = useState<number>(0);
  const tokens = ["ETH", "DAI", "USDC"];
  const amounts = ["0.1 ETH", "1 ETH", "10 ETH", "100 ETH"];

  const [privacyNotesOpend, setPrivacyNotesOpend] = useState<boolean>(false);

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

export default Deposit;

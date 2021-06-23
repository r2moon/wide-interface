import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, Button } from "components";
import Deposit from "./components/Deposit";

const PrivacyDiv = styled.div`
  width: 100%;
  background: ${({ theme }) => `radial-gradient(
    175.86% 187.97% at 149.12% -81.03%,
    ${theme.colors.primary} 0%,
    ${theme.colors.background2} 100%
  )`};
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 50px;
`;

const PrivacyTransfer = () => {
  const [deposit, setDeposit] = useState<boolean>(true);

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      direction="column"
      width="100%"
      height="100%"
      padding="100px 0"
      maxWidth="1200px"
    >
      <FlexContainer alignItems="center" direction="column" width="50%">
        <FlexContainer
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          width="100%"
          margin="0 0 12px 0"
        >
          <Button
            variant={deposit ? "primary" : "secondary"}
            margin="0 30px 0 0"
            width="100%"
            onClick={() => setDeposit(true)}
          >
            DEPOSIT
          </Button>
          <Button
            variant={!deposit ? "primary" : "secondary"}
            margin="0 0 0 30px"
            width="100%"
            onClick={() => setDeposit(false)}
          >
            WITHDRAW
          </Button>
        </FlexContainer>
        <PrivacyDiv>
          <Deposit />
        </PrivacyDiv>
      </FlexContainer>
    </FlexContainer>
  );
};

export default PrivacyTransfer;

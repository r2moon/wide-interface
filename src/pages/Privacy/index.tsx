import { useState, useCallback } from "react";
import styled from "styled-components";
import { FlexContainer, Button } from "components";
import Deposit from "./components/Deposit";

const PrivacyDiv = styled.div`
  width: 100%;
  background: radial-gradient(
    175.86% 187.97% at 149.12% -81.03%,
    #1400ff 0%,
    #f2f2f2 100%
  );
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 50px;
`;

const Privacy = () => {
  const [deposit, setDeposit] = useState<boolean>(true);

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      direction="column"
      width="100%"
      height="100%"
      padding="100px 0"
    >
      <FlexContainer alignItems="center" direction="column">
        <FlexContainer
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          width="100%"
          margin="0 0 12px 0"
        >
          <Button
            variant={deposit ? "primary" : "secondary"}
            onClick={() => setDeposit(true)}
          >
            DEPOSIT
          </Button>
          <Button
            variant={!deposit ? "primary" : "secondary"}
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

export default Privacy;

import { useState, useCallback } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import { FlexContainer, Input, ConnectButton, Button } from "components";
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

const StyledSpace = styled.div`
  margin-bottom: 13px;
`;

export default () => {
  const { active, account } = useWeb3React();

  const [privacyNotesOpend, setPrivacyNotesOpend] = useState<boolean>(false);

  const withdraw = useCallback(() => {
    setPrivacyNotesOpend(true);
  }, []);

  return (
    <FlexContainer
      direction="column"
      alignItems="flex-start"
      margin="45px 65px"
    >
      <StyledGroup>
        <StyledLabel>Note</StyledLabel>
        <Input placeholder="ENTER YOUR NOTE" />
      </StyledGroup>
      <StyledGroup>
        <StyledLabel>Receiver Address</StyledLabel>
        <Input placeholder="ENTER THE ADDRESS" />
      </StyledGroup>
      <StyledSpace />
      {(!account || !active) && <ConnectButton width="100%" />}
      {account && active && (
        <Button variant="primary" width="100%" onClick={withdraw}>
          WITHDRAW
        </Button>
      )}
      {/* <PrivacyNotesModal
        isOpen={privacyNotesOpend}
        onDismiss={() => setPrivacyNotesOpend(false)}
      /> */}
    </FlexContainer>
  );
};

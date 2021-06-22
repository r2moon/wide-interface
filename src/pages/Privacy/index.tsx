import { useState, useCallback } from "react";
import styled from "styled-components";
import { FlexContainer } from "components";
import Deposit from "./components/Deposit";

const PrivacyDiv = styled.div`
  position: relative;
  max-width: 480px;
  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  border-radius: 24px;
  padding: 20px;
`;

const Privacy = () => (
  <FlexContainer
    alignItems="center"
    justifyContent="center"
    width="100%"
    height="100%"
    padding="200px 0"
  >
    <PrivacyDiv>
      <Deposit />
    </PrivacyDiv>
  </FlexContainer>
);

export default Privacy;

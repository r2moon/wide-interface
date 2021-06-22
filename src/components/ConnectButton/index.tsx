import { useCallback, useState } from "react";
import styled from "styled-components";
import { ConnectWalletModal } from "components";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { truncate } from "utils/formatter";
import { NetworkContextName } from "constants/misc";

const StyledConnectButton = styled.button`
  border: 1px solid #fff;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
  background-color: transparent;
  color: #fff;
`;

const ConnectButton = () => {
  const { active, account } = useWeb3React();
  const contextNetwork = useWeb3React(NetworkContextName);

  const [showConnectWalletModal, setShowConnectWalletModal] =
    useState<boolean>(false);

  const connectHandler = useCallback(() => {
    setShowConnectWalletModal(true);
  }, []);

  return (
    <StyledConnectButton onClick={connectHandler}>
      {account && active ? truncate(account) : "Connect"}
      <ConnectWalletModal
        isOpen={showConnectWalletModal}
        onDismiss={() => setShowConnectWalletModal(false)}
      />
    </StyledConnectButton>
  );
};

export default ConnectButton;

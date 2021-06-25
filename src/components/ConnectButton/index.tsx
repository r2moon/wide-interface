import { useCallback, useState } from "react";
import styled from "styled-components";
import { ConnectWalletModal, Button } from "components";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { truncate } from "utils/formatter";
import { NetworkContextName } from "constants/misc";

type ConnectButtonProps = {
  width?: string;
};

const ConnectButton = ({ width }: ConnectButtonProps) => {
  const { active, account } = useWeb3React();

  const [showConnectWalletModal, setShowConnectWalletModal] =
    useState<boolean>(false);

  const connectHandler = useCallback(() => {
    setShowConnectWalletModal(true);
  }, []);

  return (
    <Button
      variant="primary"
      onClick={connectHandler}
      width={width}
      title={account && active ? truncate(account) : "Connect"}
    >
      <ConnectWalletModal
        isOpen={showConnectWalletModal}
        onDismiss={() => setShowConnectWalletModal(false)}
      />
    </Button>
  );
};

export default ConnectButton;

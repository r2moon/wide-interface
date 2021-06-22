import { useCallback, useState } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Modal } from "components";
import { injected } from "connectors";
import { SUPPORTED_WALLETS } from "constants/wallet";
import MetamaskIcon from "assets/images/metamask.png";
import Option from "./Option";

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
};

const WALLET_VIEWS = {
  OPTIONS: "options",
  OPTIONS_SECONDARY: "options_secondary",
  ACCOUNT: "account",
  PENDING: "pending",
};

const ConnectWalletModal = ({ isOpen, onDismiss }: Props) => {
  const { active, account, connector, activate, error } = useWeb3React();

  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);

  const [pendingWallet, setPendingWallet] = useState<
    AbstractConnector | undefined
  >();

  const [pendingError, setPendingError] = useState<boolean>();

  const tryActivation = useCallback(
    async (connector: AbstractConnector | undefined) => {
      let name = "";
      Object.keys(SUPPORTED_WALLETS).map((key) => {
        if (connector === SUPPORTED_WALLETS[key].connector) {
          name = SUPPORTED_WALLETS[key].name;
          return true;
        }
        return true;
      });
      // log selected wallet
      setPendingWallet(connector); // set wallet for pending view
      setWalletView(WALLET_VIEWS.PENDING);

      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      if (
        connector instanceof WalletConnectConnector &&
        connector.walletConnectProvider?.wc?.uri
      ) {
        // eslint-disable-next-line no-param-reassign
        connector.walletConnectProvider = undefined;
      }

      if (connector) {
        activate(connector, undefined, true).catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(connector); // a little janky...can't use setError because the connector isn't set
          } else {
            setPendingError(true);
          }
        });
      }
    },
    [activate]
  );

  const getOptions = useCallback(() => {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];
      // check for mobile options
      if (isMobile) {
        if (!window.web3 && !window.ethereum && option.mobile) {
          return (
            <Option
              onClick={() => {
                if (option.connector !== connector && !option.href) {
                  tryActivation(option.connector);
                  onDismiss();
                }
              }}
              id={`connect-${key}`}
              key={key}
              active={option.connector && option.connector === connector}
              color={option.color}
              link={option.href}
              header={option.name}
              subheader={null}
              icon={option.iconURL}
            />
          );
        }
        return null;
      }

      // overwrite injected when needed
      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          if (option.name === "MetaMask") {
            return (
              <Option
                id={`connect-${key}`}
                key={key}
                color="#E8831D"
                header={<span>Install Metamask</span>}
                subheader={null}
                link="https://metamask.io/"
                icon={MetamaskIcon}
              />
            );
          }
          return null; // dont want to return install twice
        }
        // don't return metamask if injected provider isn't metamask
        if (option.name === "MetaMask" && !isMetamask) {
          return null;
        }
        // likewise for generic
        if (option.name === "Injected" && isMetamask) {
          return null;
        }
      }

      // return rest of options
      return (
        !isMobile &&
        !option.mobileOnly && (
          <Option
            id={`connect-${key}`}
            onClick={() => {
              if (option.connector === connector) {
                setWalletView(WALLET_VIEWS.ACCOUNT);
              } else if (!option.href) {
                tryActivation(option.connector);
              }
            }}
            key={key}
            active={option.connector === connector}
            color={option.color}
            link={option.href}
            header={option.name}
            subheader={null} // use option.descriptio to bring back multi-line
            icon={option.iconURL}
          />
        )
      );
    });
  }, [connector, onDismiss, tryActivation]);

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90}>
      <UpperSection>
        <HeaderRow>
          <span>Connect to a wallet</span>
        </HeaderRow>
        {getOptions()}
      </UpperSection>
    </Modal>
  );
};

export default ConnectWalletModal;
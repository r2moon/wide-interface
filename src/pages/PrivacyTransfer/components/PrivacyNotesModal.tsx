import styled from "styled-components";
import { Button, FlexContainer, Modal } from "components";
import { HeaderTitle, CloseButton } from "components/Modal";
import CloseIcon from "assets/icons/close.svg";

const Group = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;

const StyledNotes = styled.span`
  word-break: break-all;
  color: ${({ theme }) => theme.colors.primary};
`;

type Props = {
  isOpen: boolean;
  privateNote: any;
  onDismiss: () => void;
  onDeposit: () => void;
};

export default ({ isOpen, privateNote, onDismiss, onDeposit }: Props) => (
  <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90}>
    <FlexContainer direction="column" margin="32px 24px 30px" width="100%">
      <FlexContainer
        alignItems="center"
        justifyContent="center"
        margin="0 0 16px 0"
        position="relative"
      >
        <HeaderTitle>Your Private Note</HeaderTitle>
        <CloseButton onClick={onDismiss}>
          <img src={CloseIcon} alt="close" />
        </CloseButton>
      </FlexContainer>
      <FlexContainer
        alignItems="center"
        justifyContent="center"
        direction="column"
        margin="0 0 16px 0"
      >
        <Group>
          <span>
            Please backup your note. You will need it later to withdraw your
            deposit back.
            <br />
            Treat your note as a private key - <b>never share</b> it with
            anyone, including wide.finance developers.
          </span>
        </Group>
        <Group>
          {privateNote && <StyledNotes>{privateNote.notes}</StyledNotes>}
        </Group>

        <Group>
          <span>
            The browser will ask to save your note as a file:
            <br />
          </span>
          {privateNote && <StyledNotes>{privateNote.fileName}</StyledNotes>}
        </Group>

        <Button
          title="SEND DEPOSIT"
          variant="primary"
          onClick={() => onDeposit()}
        />
      </FlexContainer>
    </FlexContainer>
  </Modal>
);

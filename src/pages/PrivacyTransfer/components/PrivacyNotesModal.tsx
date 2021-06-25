import { useCallback, useState } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Modal } from "components";

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

const PrivacyNotesModal = ({ isOpen, onDismiss }: Props) => {
  const [notes, setNotes] = useState("22");
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90}>
      <UpperSection>
        <HeaderRow>
          <span>Your privacy note</span>
        </HeaderRow>
      </UpperSection>
    </Modal>
  );
};

export default PrivacyNotesModal;

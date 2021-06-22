import React, { useRef } from "react";
import styled from "styled-components";
import { FlexContainer } from "components";
import { useFocusTracker } from "hook";

const StyledDropDownList = styled.div`
  width: 100%;
  max-height: 300px;
  margin: 0;
  overflow-y: auto;
  background: white;
  border: 2px solid black;
  border-radius: 0;
  transform-origin: top;
  animation: openDropdown 0.15s ease-in;
  position: absolute;
  top: 100%;
  left: -2px;
  z-index: 1;

  @keyframes openDropdown {
    0% {
      transform: scale(0.7);
      opacity: 0;
    }

    50% {
      transform: scale(1.1);
      opacity: 1;
    }

    100% {
      transform: scale(1);
    }
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    position: absolute;
    right: 0;
  }

  &::-webkit-scrollbar:vertical {
    width: 11px;
  }

  &::-webkit-scrollbar:horizontal {
    height: 11px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid grey;
  }
`;

const StyledDropDownOption = styled.div`
  padding: 5px;
  color: black;
  font-weight: 400;
  position: relative;
  cursor: pointer;

  &.active {
    padding: 5px;
    font-weight: 700;
  }

  &.hasScrollbar {
    padding: 14px 25px 14px 16px;

    &.active::before,
    &.active::after {
      margin-right: -11px;
    }
  }
`;

const StyledTytle = styled.div`
  cursor: pointer;
  padding: 8px 10px;
`;

type DropDownProps = {
  options: string[];
  selected?: number;
  placeholder?: string;
  onChange: (index: number) => void;
};

const DropDown = ({
  options,
  selected,
  placeholder,
  onChange,
}: DropDownProps) => {
  const selectEl = useRef(null);
  const focused = useFocusTracker(selectEl, true);

  return (
    <FlexContainer
      ref={selectEl}
      alignItems="center"
      border="1px solid black"
      position="relative"
      width="100%"
    >
      <StyledTytle>
        {selected !== undefined ? options[selected] : placeholder}
      </StyledTytle>
      {focused && (
        <StyledDropDownList>
          {options.map((option, i) => (
            <StyledDropDownOption onClick={() => onChange(i)}>
              {option}
            </StyledDropDownOption>
          ))}
        </StyledDropDownList>
      )}
    </FlexContainer>
  );
};

export default DropDown;
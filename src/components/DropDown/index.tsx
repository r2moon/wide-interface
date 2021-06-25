import { useRef } from "react";
import styled from "styled-components";
import { useFocusTracker } from "hook";

type StyledDropDownBoxProps = {
  opened?: boolean;
};

const StyledDropDownBox = styled.div<StyledDropDownBoxProps>`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  border: 2px solid;
  background-color: white;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ opened }) => (opened ? "22px 22px 0 0" : "22px")};
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledDropDownList = styled.div`
  width: 100%;
  max-height: 300px;
  margin: 0;
  overflow-y: auto;
  background: white;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 22px 22px;
  transform-origin: top;
  animation: openDropdown 0.15s ease-in;
  position: absolute;
  top: 100%;
  left: -2px;
  z-index: 1;

  @keyframes openDropdown {
    0% {
      transform: scale(1, 0.2);
      opacity: 0;
    }

    50% {
      transform: scale(1, 0.6);
      opacity: 1;
    }

    100% {
      transform: scale(1, 1);
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
  display: flex;
  align-items: center;
  height: 30px;
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

const StyledTitle = styled.div`
  cursor: pointer;
  padding: 8px 10px;
`;

type DropDownProps = {
  options: string[];
  selected?: number;
  placeholder?: string;
  onChange: (index: number) => void;
};

export default ({
  options,
  selected,
  placeholder,
  onChange,
}: DropDownProps) => {
  const selectEl = useRef(null);
  const focused = useFocusTracker(selectEl, true);

  return (
    <StyledDropDownBox ref={selectEl} opened={focused}>
      <StyledTitle>
        {selected !== undefined ? options[selected] : placeholder}
      </StyledTitle>
      {focused && (
        <StyledDropDownList>
          {options.map((option, i) => (
            <StyledDropDownOption onClick={() => onChange(i)}>
              <div>{option}</div>
            </StyledDropDownOption>
          ))}
        </StyledDropDownList>
      )}
    </StyledDropDownBox>
  );
};

import { useRef } from "react";
import styled from "styled-components";
import { FlexContainer } from "components";

type StyledItemProps = {
  selected?: boolean;
};

const StyledLabel = styled.span<StyledItemProps>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.text2};
`;

const StyledItem = styled.div<StyledItemProps>`
  border: 2px solid;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : "transparent"};
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : "white"};
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const StyledRadioItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  color: black;
  font-weight: 400;
  position: relative;
  cursor: pointer;

  &.active {
    padding: 5px;
    font-weight: 700;
  }
`;

type RadioSelectorProps = {
  options: string[];
  selected?: number;
  onChange: (index: number) => void;
};

const RadioSelector = ({ options, selected, onChange }: RadioSelectorProps) => (
  <FlexContainer justifyContent="space-between" width="100%">
    {options.map((option, i) => (
      <StyledRadioItem onClick={() => onChange(i)}>
        <StyledItem selected={i === selected} />
        <StyledLabel selected={i === selected}>{option}</StyledLabel>
      </StyledRadioItem>
    ))}
  </FlexContainer>
);

export default RadioSelector;

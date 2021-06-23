import styled from "styled-components";

type RoundRowProps = {
  variant?: "primary" | "secondary";
  width?: string;
  height?: number;
  padding?: string;
  margin?: string;
  borderWidth?: string;
};

const StyledRoundRow = styled.div<RoundRowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-style: solid;
  border-width: ${({ borderWidth }) => borderWidth ?? "2px"};
  height: ${({ height }) => (height ? `${height}px` : "48px")};
  width: ${({ width }) => width};
  border-radius: ${({ height }) => (height ? `${height / 2}px` : "24px")};
  padding: ${({ padding }) => padding ?? "0 15px"};
  margin: ${({ margin }) => margin};
  font-size: 14px;

  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.primary
      : theme.colors.backgroundColor};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.text1 : theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
`;

export default StyledRoundRow;

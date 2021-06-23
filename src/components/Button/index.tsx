import styled from "styled-components";

type ButtonProps = {
  variant?: "primary" | "secondary";
  width?: string;
};

const StyledButton = styled.button<ButtonProps>`
  border: 2px solid;
  height: 48px;
  width: 100%;
  border-radius: 24px;
  padding: 0 15px;
  font-size: 14px;

  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.primary
      : theme.colors.backgroundColor};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.text1 : theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
`;

export default StyledButton;

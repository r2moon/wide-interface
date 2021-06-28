import React from "react";
import styled from "styled-components";

type ButtonProps = {
  title?: string;
  icon?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  width?: string;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
};

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: ${({ width }) => width};
  border-radius: 22px;
  padding: 0 15px;
  font-size: 14px;
  box-sizing: border-box;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.primary : "transparent"};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.text1 : theme.colors.primary};
`;

const StyledBorder = styled.div<ButtonProps>`
  position: absolute;
  left: -2px;
  right: -2px;
  top: -2px;
  bottom: -2px;
  background-color: transparent;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
`;

const StyledIconContainer = styled.div`
  position: absolute;
  left: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  background: radial-gradient(
    175.86% 187.97% at 158.12% -81.03%,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.background2} 100%
  );
`;

const Button = ({
  title,
  icon,
  onClick,
  variant,
  width,
  padding,
  margin,
  children,
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    variant={variant}
    width={width}
    padding={padding}
    margin={margin}
  >
    {icon && (
      <StyledIconContainer>
        <img src={icon} alt={title} />
      </StyledIconContainer>
    )}
    {title}
    {children}
    <StyledBorder width={width} />
  </StyledButton>
);
export default Button;

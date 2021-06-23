import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ConnectButton, FlexContainer } from "components";
import logo from "assets/logo.svg";

const HeaderDiv = styled.header`
  position: sticky;
  top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.link};
  font-size: 18px;
  margin: 0 20px;
  text-align: center;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const ItemContainer = styled.div`
  padding: 0 20px;
`;

const Header = () => (
  <HeaderDiv>
    <ItemContainer>
      <Logo src={logo} alt="logo" />
    </ItemContainer>
    <FlexContainer padding="0 20px" alignItems="center">
      <StyledNavLink to="/privacy-transfer">Privacy Transfer</StyledNavLink>
      <StyledNavLink to="/governance">Governance</StyledNavLink>
      <StyledNavLink to="/yield-farming">Yield Farming</StyledNavLink>
      <StyledNavLink to="/games">Games</StyledNavLink>
      <ConnectButton width="150px" />
    </FlexContainer>
  </HeaderDiv>
);

export default Header;

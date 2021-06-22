import styled from "styled-components";
import { ConnectButton } from "components";
import logo from "../../logo.svg";

const HeaderDiv = styled.header`
  position: sticky;
  top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
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
    <ItemContainer>
      <ConnectButton />
    </ItemContainer>
  </HeaderDiv>
);

export default Header;

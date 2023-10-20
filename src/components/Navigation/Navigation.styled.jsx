import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavStyled = styled.nav``;

const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavListItemStyled = styled.li``;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;

  font-size: 20px;
  color: #000;

  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: #0b44cd;
    color: #fff;
  }

  &.active {
    background-color: #3470ff;
    color: #fff;
  }
`;

export { NavLinkStyled, NavListStyled, NavStyled, NavListItemStyled };

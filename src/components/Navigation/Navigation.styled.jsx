import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
  color: var(--primary-text-color);

  border-radius: 10px;

  transition: background-color var(--timing-function) var(--transition-duration),
    color var(--timing-function) var(--transition-duration);

  &:hover,
  &:focus {
    background-color: var(--hover-color);
    color: var(--button-text-color);
  }

  &.active {
    background-color: var(--accent-color);
    color: var(--button-text-color);
  }
`;

export { NavLinkStyled, NavListStyled, NavStyled, NavListItemStyled };

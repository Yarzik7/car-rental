import styled from '@emotion/styled';

const SideBarStyled = styled.aside`
  position: absolute;
  top: 0;
  left: 0;

  width: 20vw;
  height: 100vh;
  padding: 50px 24px;

  background-color: var(--button-text-color);
`;

const CloseButtonStyled = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;

  background-color: transparent;
  border: none;

  cursor: pointer;
  outline: none;

  & svg {
    stroke: var(--primary-text-color);
  }

  & svg:hover,
  & svg:focus {
    stroke: var(--hover-color);
  }
`;

const CloseIconStyled = styled.svg`
  width: 24px;
  height: 24px;

  stroke: currentColor;
  transition: stroke var(--timing-function) var(--transition-duration);
`;

export { SideBarStyled, CloseButtonStyled, CloseIconStyled };

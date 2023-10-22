import styled from '@emotion/styled';

const BurgerButtonStyled = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin: 0;
  padding: 0;

  border: none;
  background-color: transparent;

  outline: none;
  cursor: pointer;

  & svg {
    fill: var(--primary-text-color);
    stroke: var(--primary-text-color);
  }

  & svg:hover,
  & svg:focus {
    fill: var(--hover-color);
    stroke: var(--hover-color);
  }
`;

const BurgerButtonIconStyled = styled.svg`
  width: 35px;
  height: 35px;

  stroke: currentColor;
  transition: fill var(--timing-function) var(--transition-duration),
    stroke var(--timing-function) var(--transition-duration);
`;

export { BurgerButtonStyled, BurgerButtonIconStyled };

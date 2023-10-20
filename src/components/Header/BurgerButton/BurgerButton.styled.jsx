import styled from "@emotion/styled";

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
    fill: #000;
    stroke: #000;
  }

  & svg:hover,
  & svg:focus {
    fill: #0b44cd;
    stroke: #0b44cd;
  }
`;

const BurgerButtonIconStyled = styled.svg`
  width: 35px;
  height: 35px;

  stroke: currentColor;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
`;

export { BurgerButtonStyled, BurgerButtonIconStyled };

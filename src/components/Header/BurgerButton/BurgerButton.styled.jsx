import styled from "@emotion/styled";

const BurgerButtonStyled = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;

  border: none;
  background-color: transparent;

  outline: none;
  cursor: pointer;
`;

const BurgerButtonIconStyled = styled.svg`
  width: 24px;
  height: 24px;

  stroke: #000;
`;

export { BurgerButtonStyled, BurgerButtonIconStyled };

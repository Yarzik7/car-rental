import styled from "@emotion/styled";

const SideBarStyled = styled.aside`
  position: absolute;
  top: 0;
  left: 0;

  width: 20vw;
  height: 100vh;
  padding: 50px 24px;

  background-color: #fff;
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
    stroke: #000;
  }

  & svg:hover,
  & svg:focus {
    stroke: #0b44cd;
  }
`;

const CloseIconStyled = styled.svg`
  width: 24px;
  height: 24px;

  stroke: currentColor;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
`;

export { SideBarStyled, CloseButtonStyled, CloseIconStyled };

import styled from "@emotion/styled";

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(18, 20, 23, 0.5);
`;

const ModalContainerStyled = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 541px;
  padding: 40px;

  background-color: #fff;
  border-radius: 24px;
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

export {
  BackdropStyled,
  ModalContainerStyled,
  CloseButtonStyled,
  CloseIconStyled,
};

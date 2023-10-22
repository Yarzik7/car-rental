import styled from '@emotion/styled';

const ModalContainerStyled = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 541px;
  padding: 40px;

  background-color: var(--button-text-color);
  border-radius: 24px;

  transform: scale(0.95);
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

export { ModalContainerStyled, CloseButtonStyled, CloseIconStyled };

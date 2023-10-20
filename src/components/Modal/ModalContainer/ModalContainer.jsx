import {
  CloseButtonStyled,
  ModalContainerStyled,
  CloseIconStyled,
} from "./ModalContainer.styled";
import icons from "../../../assets/images/icons/icons.svg";

const ModalContainer = ({ children, onClose }) => {
  return (
    <ModalContainerStyled>
      <CloseButtonStyled onClick={onClose}>
        <CloseIconStyled>
          <use xlinkHref={`${icons}#icon-close`}></use>
        </CloseIconStyled>
      </CloseButtonStyled>
      {children}
    </ModalContainerStyled>
  );
};

export default ModalContainer;

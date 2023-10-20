import {
  BackdropStyled,
  // CloseButtonStyled,
  // ModalContainerStyled,
  // CloseIconStyled,
} from "./Modal.styled";
import { createPortal } from "react-dom";
import { useEffect } from "react";
// import icons from "../../assets/images/icons/icons.svg";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleCloseByEsc = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleCloseByEsc);

    return () => {
      window.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <BackdropStyled onClick={handleBackdropClick}>
      {children}
      {/* <ModalContainerStyled>
        <CloseButtonStyled onClick={onClose}>
          <CloseIconStyled>
            <use xlinkHref={`${icons}#icon-close`}></use>
          </CloseIconStyled>
        </CloseButtonStyled>
        {children}
      </ModalContainerStyled> */}
    </BackdropStyled>,
    modalRoot
  );
};

export default Modal;

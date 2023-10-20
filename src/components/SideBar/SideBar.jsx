import {
  SideBarStyled,
  CloseButtonStyled,
  CloseIconStyled,
} from "./SideBar.styled";
import Navigation from "../Navigation/Navigation";
import icons from "../../assets/images/icons/icons.svg";

const SideBar = ({ onClose, showModal }) => {
  return (
    <SideBarStyled>
      <CloseButtonStyled onClick={onClose}>
        <CloseIconStyled>
          <use xlinkHref={`${icons}#icon-close`}></use>
        </CloseIconStyled>
      </CloseButtonStyled>

      <Navigation />
    </SideBarStyled>
  );
};

export default SideBar;

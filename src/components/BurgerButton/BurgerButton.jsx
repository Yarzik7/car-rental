import { BurgerButtonStyled, BurgerButtonIconStyled } from './BurgerButton.styled';
import icons from '../../assets/images/icons/icons.svg';

const BurgerButton = ({ onClick }) => {
  return (
    <BurgerButtonStyled onClick={onClick}>
      <BurgerButtonIconStyled>
        <use xlinkHref={`${icons}#icon-menu`}></use>
      </BurgerButtonIconStyled>
    </BurgerButtonStyled>
  );
};

export default BurgerButton;

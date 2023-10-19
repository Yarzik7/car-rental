import { ButtonStyled } from "./Button.styled";

const Button = ({ caption, styles }) => {
  return <ButtonStyled styles={styles}>{caption}</ButtonStyled>;
};

export default Button;

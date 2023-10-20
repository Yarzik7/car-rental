import { ButtonStyled, LinkButtonStyled } from "./Button.styled";

const Button = ({ caption, styles, onClick, type = "button" }) => {
  return (
    <>
      {type === "button" ? (
        <ButtonStyled onClick={onClick} styles={styles}>
          {caption}
        </ButtonStyled>
      ) : (
        <LinkButtonStyled
          onClick={(evt) => evt.preventDefault()}
          styles={styles}
          href="tel:+380730000000"
        >
          {caption}
        </LinkButtonStyled>
      )}
    </>
  );
};

export default Button;

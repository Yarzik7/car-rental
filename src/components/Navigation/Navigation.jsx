import {
  NavLinkStyled,
  NavStyled,
  NavListStyled,
  NavListItemStyled,
} from "./Navigation.styled";

const navList = [
  { caption: "Home", to: "/" },
  { caption: "Catalog", to: "catalog" },
  { caption: "Favorite", to: "favorite" },
];

const Navigation = () => {
  return (
    <NavStyled>
      <NavListStyled>
        {navList.map(({ caption, to }, idx) => (
          <NavListItemStyled key={idx}>
            <NavLinkStyled to={to}>{caption}</NavLinkStyled>
          </NavListItemStyled>
        ))}
      </NavListStyled>
    </NavStyled>
  );
};

export default Navigation;

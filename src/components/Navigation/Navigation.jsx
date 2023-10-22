import { NavLinkStyled, NavStyled, NavListStyled, NavListItemStyled } from './Navigation.styled';

const navList = [
  { caption: 'Home', to: '/' },
  { caption: 'Catalog', to: 'catalog' },
  { caption: 'Favorite', to: 'favorite' },
];

const Navigation = ({ onLinkClick }) => {
  return (
    <NavStyled>
      <NavListStyled>
        {navList.map(({ caption, to }, idx) => (
          <NavListItemStyled key={idx}>
            <NavLinkStyled to={to} onClick={onLinkClick}>
              {caption}
            </NavLinkStyled>
          </NavListItemStyled>
        ))}
      </NavListStyled>
    </NavStyled>
  );
};

export default Navigation;

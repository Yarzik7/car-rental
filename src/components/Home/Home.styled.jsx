import styled from '@emotion/styled';

const HomeHeaderStyled = styled.h1`
  margin-bottom: 40px;

  font-size: 50px;
  line-height: 1;
  text-align: center;
  color: var(--accent-color);

  text-transform: uppercase;
`;

const HeroImageBoxStyled = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 8px;
  overflow: hidden;
`;

const HeroImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { HeroImageStyled, HeroImageBoxStyled, HomeHeaderStyled };

import { HeroImageStyled, HeroImageBoxStyled, HomeHeaderStyled } from './Home.styled';
import heroBackground from '../../assets/images/car-rental-bg.jpg';

const Home = () => {
  return (
    <>
      <HomeHeaderStyled>Welcome to car rental web page!</HomeHeaderStyled>
      <HeroImageBoxStyled>
        <HeroImageStyled src={heroBackground} alt="HeroImage" />
      </HeroImageBoxStyled>
    </>
  );
};

export default Home;

import CarItem from "../CarItem/CarItem";
import { CarListStyled } from "./CarList.styled";
import cars from "../../data/cars.json";

const CarList = () => {
  return (
    <CarListStyled>
      {cars.map((car) => (
        <CarItem key={car.id} carInfo={car} />
      ))}
    </CarListStyled>
  );
};

export default CarList;

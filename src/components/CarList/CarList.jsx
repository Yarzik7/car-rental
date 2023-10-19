import CarItem from "../CarItem/CarItem";
import cars from "../../data/cars.json";

const CarList = () => {
  return (
    <ul>
      {cars.map((car) => (
        <CarItem key={car.id} carInfo={car} />
      ))}
    </ul>
  );
};

export default CarList;

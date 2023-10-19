import CarItem from "../CarItem/CarItem";
import cars from "../../data/cars.json";

const CarList = () => {
  return (
    <ul>
      {cars.map((car) => (
        <CarItem key={car.id} model={car.model} img={car.img} />
      ))}
    </ul>
  );
};

export default CarList;

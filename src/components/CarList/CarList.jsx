import CarItem from "../CarItem/CarItem";
import { CarListStyled } from "./CarList.styled";
import { useLocalStorage } from "../../hooks";

const CarList = ({ items }) => {
  const [ids, setIds] = useLocalStorage("ids", []);

  const checkIncludes = (value) => ids.includes(value);

  const toggleFavorite = (id) => {
    const idx = ids.indexOf(id);
    if (idx === -1) {
      setIds((prevValue) => [...prevValue, id]);
      return;
    }

    setIds((prevValue) =>
      ids.filter((favoriteAdvertId) => favoriteAdvertId !== id)
    );
  };

  return (
    <CarListStyled>
      {items.map((car) => (
        <CarItem
          key={car.id}
          carInfo={car}
          favorite={checkIncludes(car.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </CarListStyled>
  );
};

export default CarList;

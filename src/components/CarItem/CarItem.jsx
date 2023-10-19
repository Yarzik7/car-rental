import { CarItemStyled } from "./CarItem.styled";
import Button from "../Button/Button";

const CarItem = ({ model, img }) => {
  return (
    <CarItemStyled>
      <div>
        <img src={img} alt={model} />
      </div>

      <div>
        <p></p>
        <p></p>
      </div>
      <p></p>
      <Button caption="Learn more" styles={{ width: "100%", height: "44px" }} />
    </CarItemStyled>
  );
};

export default CarItem;

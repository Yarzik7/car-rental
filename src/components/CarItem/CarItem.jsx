import { CarItemStyled } from "./CarItem.styled";
import Button from "../Button/Button";
import {
  FavoriteIconStyled,
  CarImageContainerStyled,
  FavoriteChangeButton,
  CarImage,
  DescriptionContainerStyled,
  AdvertParams,
} from "./CarItem.styled";
import icons from "../../assets/images/icons/icons.svg";
import { generateAdvertParamsArray } from "../../utils/generateAdvertParamsArray";

const CarItem = ({ carInfo, favorite = false }) => {
  const { img, model, rentalPrice, make, year } = carInfo;

  const paramsArray = generateAdvertParamsArray(carInfo);

  return (
    <CarItemStyled>
      <CarImageContainerStyled>
        <CarImage src={img} alt={model} />
        <FavoriteChangeButton>
          <FavoriteIconStyled favorite={favorite}>
            <use xlinkHref={`${icons}#icon-heart`}></use>
          </FavoriteIconStyled>
        </FavoriteChangeButton>
      </CarImageContainerStyled>

      <DescriptionContainerStyled>
        <p>{`${make} ${model}, ${year}`}</p>
        <p>{rentalPrice}</p>
      </DescriptionContainerStyled>
      <AdvertParams>{paramsArray.join(" | ")}</AdvertParams>
      <Button caption="Learn more" styles={{ width: "100%", height: "44px" }} />
    </CarItemStyled>
  );
};

export default CarItem;

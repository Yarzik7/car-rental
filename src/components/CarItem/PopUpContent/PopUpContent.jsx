import {
  ImageContainerStyled,
  CarImageStyled,
  CarDescriptionTextStyled,
  CarParamsHeaderStyled,
  RentalConditionParam,
  RentalConditionContainerStyled,
} from "./PopUpContent.styled";
import { AdvertHeaderStyled } from "../CarItem.styled";
import Button from "../../Button/Button";
import AdvertParams from "../../AdvertParams/AdvertParams";
import { generateAdvertParamsArray } from "../../../utils/generateAdvertParamsArray";

const PopUpContent = ({ carInfo }) => {
  const {
    img,
    model,
    make,
    year,
    description,
    accessories,
    functionalities,
    rentalPrice,
    rentalConditions,
    mileage,
  } = carInfo;

  const [minAge, license, required] = rentalConditions.split("\n");

  const paramsArray = generateAdvertParamsArray(carInfo, "popUp");
  return (
    <>
      <ImageContainerStyled>
        <CarImageStyled src={img} alt={model} />
      </ImageContainerStyled>

      <div>
        <AdvertHeaderStyled>
          {make} <span>{model}</span>, {year}
        </AdvertHeaderStyled>
        <AdvertParams marginBottom={4}>
          {paramsArray[0].join(" | ")}
        </AdvertParams>
        <AdvertParams marginBottom={14}>
          {paramsArray[1].join(" | ")}
        </AdvertParams>
        <CarDescriptionTextStyled>{description}</CarDescriptionTextStyled>
      </div>

      <div>
        <CarParamsHeaderStyled>
          Accessories and functionalities:
        </CarParamsHeaderStyled>
        <AdvertParams>{accessories.join(" | ")}</AdvertParams>
        <AdvertParams>{functionalities.join(" | ")}</AdvertParams>
      </div>

      <div>
        <CarParamsHeaderStyled>Rental Conditions:</CarParamsHeaderStyled>
        <RentalConditionContainerStyled>
          <RentalConditionParam>
            {minAge.match(/([a-zA-Z\s:]+)/)[0]}
            <span>{minAge.match(/(\d+)/)[0]}</span>
          </RentalConditionParam>
          <RentalConditionParam>{license}</RentalConditionParam>
        </RentalConditionContainerStyled>

        <RentalConditionContainerStyled>
          <RentalConditionParam>{required}</RentalConditionParam>
          <RentalConditionParam>
            {"Mileage: "}
            <span>{mileage.toLocaleString("en-US")}</span>
          </RentalConditionParam>
          <RentalConditionParam>
            {"Price: "}
            <span>{rentalPrice.match(/(\d+)/)[0] + "$"}</span>
          </RentalConditionParam>
        </RentalConditionContainerStyled>
      </div>

      <Button
        caption="Rental car"
        styles={{ width: "168px", height: "44px" }}
        type="link"
      />
    </>
  );
};

export default PopUpContent;

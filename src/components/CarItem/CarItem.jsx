import { CarItemStyled } from "./CarItem.styled";
import Button from "../Button/Button";
import {
  FavoriteIconStyled,
  CarImageContainerStyled,
  FavoriteChangeButton,
  CarImage,
  DescriptionContainerStyled,
  AdvertHeaderStyled,
  CarItemContentBox,
} from "./CarItem.styled";
import Modal from "../Modal/Modal";
import PopUpContent from "./PopUpContent/PopUpContent";
import AdvertParams from "../AdvertParams/AdvertParams";
import { useState } from "react";
import icons from "../../assets/images/icons/icons.svg";
import { generateAdvertParamsArray } from "../../utils/generateAdvertParamsArray";

const CarItem = ({ carInfo, favorite = false }) => {
  const [showModal, setShowModal] = useState(false);

  const { img, model, rentalPrice, make, year } = carInfo;
  const paramsArray = generateAdvertParamsArray(carInfo);

  const toggleModal = () => setShowModal((showModal) => !showModal);

  return (
    <CarItemStyled>
      <CarItemContentBox>
        <CarImageContainerStyled>
          <CarImage src={img} alt={model} />
          <FavoriteChangeButton>
            <FavoriteIconStyled favorite={favorite}>
              <use xlinkHref={`${icons}#icon-heart`}></use>
            </FavoriteIconStyled>
          </FavoriteChangeButton>
        </CarImageContainerStyled>

        <DescriptionContainerStyled>
          <AdvertHeaderStyled>{make} <span>{model}</span>, {year}</AdvertHeaderStyled>
          <p>{rentalPrice}</p>
        </DescriptionContainerStyled>

        <AdvertParams marginBottom={28}>{paramsArray.join(" | ")}</AdvertParams>

        <Button
          caption="Learn more"
          styles={{ width: "100%", height: "44px" }}
          onClick={toggleModal}
        />

        {showModal && (
          <Modal onClose={toggleModal}>
            <PopUpContent carInfo={carInfo} />
          </Modal>
        )}
      </CarItemContentBox>
    </CarItemStyled>
  );
};

export default CarItem;

import { CarItemStyled } from './CarItem.styled';
import Button from '../Button/Button';
import {
  FavoriteIconStyled,
  CarImageContainerStyled,
  FavoriteChangeButton,
  CarImage,
  DescriptionContainerStyled,
  AdvertHeaderStyled,
  CarItemContentBox,
} from './CarItem.styled';
import Modal from '../Modal/Modal';
import ModalContainer from '../Modal/ModalContainer/ModalContainer';
import PopUpContent from './PopUpContent/PopUpContent';
import AdvertParams from '../AdvertParams/AdvertParams';
import { useState } from 'react';
import icons from '../../assets/images/icons/icons.svg';
import { generateAdvertParamsArray } from '../../utils/generateAdvertParamsArray';

const CarItem = ({ carInfo, favorite = false, toggleFavorite }) => {
  const [showModal, setShowModal] = useState(false);

  const { img, model, rentalPrice, make, year } = carInfo;
  const paramsArray = generateAdvertParamsArray(carInfo);

  const toggleModal = () => setShowModal(showModal => !showModal);

  return (
    <CarItemStyled>
      <CarItemContentBox>
        <CarImageContainerStyled>
          <CarImage src={img} alt={model} />
          <FavoriteChangeButton onClick={() => toggleFavorite(carInfo.id)}>
            <FavoriteIconStyled favorite={favorite}>
              <use xlinkHref={`${icons}#icon-heart`}></use>
            </FavoriteIconStyled>
          </FavoriteChangeButton>
        </CarImageContainerStyled>

        <DescriptionContainerStyled>
          <AdvertHeaderStyled>
            {make} <span>{model}</span>, {year}
          </AdvertHeaderStyled>
          <p>{rentalPrice}</p>
        </DescriptionContainerStyled>

        <AdvertParams marginBottom={4}>{paramsArray[0].join(' | ')}</AdvertParams>
        <AdvertParams marginBottom={28}>{paramsArray[1].join(' | ')}</AdvertParams>

        <Button caption="Learn more" styles={{ width: '100%', height: '44px' }} onClick={toggleModal} />

        {showModal && (
          <Modal onClose={toggleModal}>
            <ModalContainer onClose={toggleModal}>
              <PopUpContent carInfo={carInfo} />
            </ModalContainer>
          </Modal>
        )}
      </CarItemContentBox>
    </CarItemStyled>
  );
};

export default CarItem;

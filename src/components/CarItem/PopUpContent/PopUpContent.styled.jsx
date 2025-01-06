import styled from '@emotion/styled';

const ImageContainerStyled = styled.div`
  width: 100%;
  height: 248px;

  background-color: var(--label-color);
  border-radius: 14px;

  overflow: hidden;
`;

const CarImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AdvertHeaderStyled = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-text-color);

  & > span {
    color: var(--accent-color);
  }
`;

const CarDescriptionTextStyled = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: var(--primary-text-color);
  width: 400px;
`;

const CarParamsHeaderStyled = styled.h4`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: var(--primary-text-color);
`;

const RentalConditionContainerStyled = styled.div`
  display: flex;
  gap: 6px;
`;

const RentalConditionParam = styled.p`
  padding: 7px 14px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: var(--condition-item-color);

  & > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
    color: var(--accent-color);
  }
`;

export {
  ImageContainerStyled,
  CarImageStyled,
  AdvertHeaderStyled,
  CarDescriptionTextStyled,
  CarParamsHeaderStyled,
  RentalConditionContainerStyled,
  RentalConditionParam,
};

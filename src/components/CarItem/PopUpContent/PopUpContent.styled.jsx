import styled from "@emotion/styled";

const ImageContainerStyled = styled.div`
  width: 100%;
  height: 248px;

  border-radius: 14px;

  overflow: hidden;
`;

const CarImageStyled = styled.img`
  width: 100%;
  height: 100%;
`;

const AdvertHeaderStyled = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  color: #121417;
`;

const CarDescriptionTextStyled = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  width: 400px;
`;

const CarParamsHeaderStyled = styled.h4`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #121417;
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
  color: #363535;
`;

const RentalNumberValue = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: #3470ff;
`;

export {
  ImageContainerStyled,
  CarImageStyled,
  AdvertHeaderStyled,
  CarDescriptionTextStyled,
  CarParamsHeaderStyled,
  RentalConditionContainerStyled,
  RentalConditionParam,
  RentalNumberValue,
};

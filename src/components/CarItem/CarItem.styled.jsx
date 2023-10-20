import styled from "@emotion/styled";

const CarItemStyled = styled.li`
  width: 274px;
`;

const CarImageContainerStyled = styled.div`
  position: relative;

  width: 100%;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
  background-color: grey;

  overflow: hidden;
`;

const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const FavoriteChangeButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  border: none;
  background-color: transparent;

  cursor: pointer;
  outline: none;
`;

const FavoriteIconStyled = styled.svg`
  width: 18px;
  height: 18px;

  fill: ${({ favorite }) => (favorite ? "#3470FF" : "transparent")};
  stroke: ${({ favorite }) => (favorite ? "#3470FF" : "#fff")};
`;

const DescriptionContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const AdvertHeaderStyled = styled.h3`
  font-weight: 500;
  line-height: 1.5;

  color: #121417;
`;

const AdvertParamsContainerStyled = styled.div`
  margin-bottom: 28px;
`;

export {
  CarItemStyled,
  FavoriteIconStyled,
  CarImageContainerStyled,
  FavoriteChangeButton,
  CarImage,
  DescriptionContainerStyled,
  AdvertParamsContainerStyled,
  AdvertHeaderStyled,
};

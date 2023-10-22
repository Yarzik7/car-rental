import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CarItemStyled = styled.li`
  flex-basis: calc((100% - 3 * 29px) / 4);
`;

const CarItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CarImageContainerStyled = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
  background-color: var(--label-color);

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
  transition: transform var(--timing-function) var(--transition-duration);

  &:hover {
    transform: scale(1.2);
  }
`;

const FavoriteIconStyled = styled.svg`
  width: 18px;
  height: 18px;

  fill: ${({ favorite }) => (favorite ? 'var(--accent-color)' : 'transparent')};
  stroke: ${({ favorite }) =>
    favorite ? 'var(--accent-color)' : 'var(--heart-stroke-color)'};
`;

const descriptionMixin = css`
  font-weight: 500;
  line-height: 1.5;
  color: var(--primary-text-color);
`;

const DescriptionContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  flex-grow: 1;

  ${descriptionMixin}
`;

const AdvertHeaderStyled = styled.h3`
  font-size: 16px;
  ${descriptionMixin}

  & > span {
    color: var(--accent-color);
  }
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
  CarItemContentBox,
};

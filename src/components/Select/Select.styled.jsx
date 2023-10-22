import styled from '@emotion/styled';

const SelectContainerStyled = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: 48px;
`;

export const TestDiv = styled.div`
  position: relative;
`

const SelectStyled = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 18px;

  font-size: 18px;
  font-weight: 500;
  color: var(--primary-text-color);

  border-radius: 14px;
  background-color: var(--bg-select-color);
  border: none;

  cursor: pointer;
  outline: none;

  &::placeholder {
    color: var(--primary-text-color);
  }
`;

// const SelectStyled = styled.button`
//   position: relative;

//   display: flex;
//   align-items: center;
//   width: ${({ width }) => width};
//   height: 48px;
//   padding: 0 18px;

//   font-size: 18px;
//   font-weight: 500;
//   color: var(--primary-text-color);

//   border-radius: 14px;
//   background-color: var(--bg-select-color);
//   border: none;

//   cursor: pointer;
//   outline: none;
// `;

const SelectLabelStyled = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`;

const ChevronIconStyled = styled.svg`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;

  stroke: var(--primary-text-color);
  fill: none;
`;

const SelectListContainerStyled = styled.div`
  position: absolute;
  top: 52px;
  left: 0;

  width: 100%;
  height: 272px;
  padding: 14px 0;
  padding-right: 8px;

  border-radius: 14px;
  border: 1px solid var(--secondary-text-color);
  background-color: var(--button-text-color);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  z-index: 1;
`;

const SelectListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  cursor: auto;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--select-text-color);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--label-color);
  }
`;

export {
  SelectStyled,
  SelectLabelStyled,
  ChevronIconStyled,
  SelectListStyled,
  SelectListContainerStyled,
  SelectContainerStyled,
};

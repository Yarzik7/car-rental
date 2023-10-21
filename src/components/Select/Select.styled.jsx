import styled from "@emotion/styled";

const SelectContainerStyled = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: 48px;
`;

// const SelectStyled = styled.input`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   padding: 0 18px;

//   font-size: 18px;
//   font-weight: 500;
//   color: #121417;

//   border-radius: 14px;
//   background-color: #f7f7fb;
//   border: none;

//   cursor: pointer;
//   outline: none;
// `;

const SelectStyled = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  height: 48px;
  padding: 0 18px;

  font-size: 18px;
  font-weight: 500;
  color: #121417;

  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;

  cursor: pointer;
  outline: none;
`;

const SelectLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: #8a8a89;
`;

const ChevronIconStyled = styled.svg`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;

  stroke: #121417;
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
  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: #fff;
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
    background-color: rgba(18, 20, 23, 0.05);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: grey;
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

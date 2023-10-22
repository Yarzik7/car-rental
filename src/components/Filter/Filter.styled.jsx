import styled from '@emotion/styled';

const FilterContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`;

const MileageLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`;

const FromMileageInputStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 70px;
  padding-right: 10px;
  width: 160px;
  height: 48px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: var(--primary-text-color);

  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background-color: var(--bg-select-color);

  cursor: pointer;
  outline: none;
`;

const ToMileageInputStyled = styled(FromMileageInputStyled)`
  padding-left: 50px;

  border-radius: 0px 14px 14px 0px;
`;

const MileageBoxStyled = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MileageInputBoxStyled = styled.div`
  position: relative;
`;

const MileageInputCaptionStyled = styled.span`
  position: absolute;
  top: 14px;
  left: 24px;

  font-size: 18px;

  font-weight: 500;
  line-height: 1.11;
  color: var(--primary-text-color);
`;

export {
  FilterContainerStyled,
  FromMileageInputStyled,
  MileageLabel,
  ToMileageInputStyled,
  MileageBoxStyled,
  MileageInputBoxStyled,
  MileageInputCaptionStyled,
};

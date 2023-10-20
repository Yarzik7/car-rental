import { AdvertParamsStyled } from "./AdvertParams.styled";

const AdvertParams = ({ children, marginBottom }) => {
  return (
    <AdvertParamsStyled marginBottom={marginBottom}>
      {children}
    </AdvertParamsStyled>
  );
};

export default AdvertParams;

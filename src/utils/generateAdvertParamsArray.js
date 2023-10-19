export const generateAdvertParamsArray = ({
  address,
  rentalCompany,
  type,
  model,
  id,
  functionalities,
}) => {
  const [city, country] = address.split(",").slice(-2);
  return [city, country, rentalCompany, type, model, id, functionalities[0]];
};

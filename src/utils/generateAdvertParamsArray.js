export const generateAdvertParamsArray = (
  {
    address,
    rentalCompany,
    type,
    model,
    id,
    functionalities,
    year,
    fuelConsumption,
    engineSize,
  },
  usingType = "carItem"
) => {
  const [city, country] = address.split(",").slice(-2);

  const advertParams = {
    carItem: [
      city,
      country,
      rentalCompany,
      type,
      model,
      id,
      functionalities[0],
    ],
    popUp: [
      [city, country, `id: ${id}`, `year: ${year}`, `type ${type}`],
      [`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`],
    ],
  };
  return advertParams[usingType];
};

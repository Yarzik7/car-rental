import { FilterContainerStyled } from "./Filter.styled";
import Select from "../Select/Select";
import { useState, useEffect } from "react";

import { createPricesArray } from "../../utils/createPricesArray";
import carBrands from "../../data/carBrands.json";

const Filter = ({ getFilter }) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [fromMileage, setFromMileage] = useState("");
  const [toMileage, setToMileage] = useState("");

  useEffect(() => {
    getFilter({ brand, price });
  }, [price, brand, getFilter]);

  return (
    <FilterContainerStyled>
      <Select
        placeholder={brand || "Enter the text"}
        width="224px"
        label="Car brand"
        firstOptText={"All"}
        firstOptValue={""}
        options={carBrands}
        getValue={setBrand}
      />

      <Select
        placeholder={price || "To $"}
        width="125px"
        label="Price/ 1 hour"
        firstOptText="All"
        firstOptValue=""
        options={createPricesArray({ amount: 50, step: 10 })}
        getValue={setPrice}
      />
    </FilterContainerStyled>
  );
};

export default Filter;

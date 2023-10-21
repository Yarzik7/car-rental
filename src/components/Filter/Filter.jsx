import { SelectStyled, OptionStyled } from "./Filter.styled";

const Filter = () => {
  return (
    <div>
      <SelectStyled placeholder="Enter the text">
        <OptionStyled value="option1">Option 1</OptionStyled>
        <OptionStyled value="option2">Option 2</OptionStyled>
        <OptionStyled value="option3">Option 3</OptionStyled>
      </SelectStyled>
    </div>
  );
};

export default Filter;

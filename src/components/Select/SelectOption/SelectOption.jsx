import { SelectOptionStyled } from "./SelectOption.styled";

const SelectOption = ({ text, value, getValue, toggleOptionsShow }) => {
  const onSelectOption = () => {
    getValue(value);
    console.log("select");
    // toggleOptionsShow(false);
  };

  return (
    <SelectOptionStyled onClick={onSelectOption}>{text}</SelectOptionStyled>
  );
};

export default SelectOption;

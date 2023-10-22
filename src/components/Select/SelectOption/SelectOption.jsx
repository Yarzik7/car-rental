import { SelectOptionStyled } from './SelectOption.styled';

const SelectOption = ({ text, value, getValue, toggleOptionsShow, blur }) => {
  const onSelectOption = () => {
    getValue(value);
    toggleOptionsShow();
    blur();
  };

  return <SelectOptionStyled onClick={onSelectOption}>{text}</SelectOptionStyled>;
};

export default SelectOption;

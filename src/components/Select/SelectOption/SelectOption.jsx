import { SelectOptionStyled } from './SelectOption.styled';

const SelectOption = ({ text, value, getValue, toggleOptionsShow }) => {
  const onSelectOption = evt => {
    getValue(value);
    console.log('select');
    toggleOptionsShow(evt);
  };

  return <SelectOptionStyled onClick={onSelectOption}>{text}</SelectOptionStyled>;
};

export default SelectOption;

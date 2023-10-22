import {
  FilterContainerStyled,
  FromMileageInputStyled,
  MileageLabel,
  ToMileageInputStyled,
  MileageBoxStyled,
} from './Filter.styled';
import Select from '../Select/Select';
import Button from '../Button/Button';
import { useState } from 'react';

import { createPricesArray } from '../../utils/createPricesArray';
import carBrands from '../../data/carBrands.json';

const Filter = ({ getFilter }) => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');

  const onSearch = () => getFilter({ brand, price });

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'fromMileage':
        setFromMileage(value.replace(',', ''));
        return;
      case 'toMileage':
        setToMileage(value.replace(',', ''));
        return;
      default:
        return;
    }
  };

  const onKeyPress = evt => {
    const pattern = /[0-9]/;
    if (!pattern.test(evt.key) && evt.key !== 'Backspace') {
      evt.preventDefault();
    }
  };

  return (
    <FilterContainerStyled>
      <Select
        placeholder={brand || 'Enter the text'}
        width="224px"
        label="Car brand"
        firstOptText={'All'}
        firstOptValue={''}
        options={carBrands}
        getValue={setBrand}
      />
      <Select
        placeholder={price || 'To $'}
        width="125px"
        label="Price/ 1 hour"
        firstOptText="All"
        firstOptValue=""
        options={createPricesArray({ amount: 50, step: 10 })}
        getValue={setPrice}
      />
      <MileageBoxStyled>
        <MileageLabel>
          {'Car mileage / km'}
          <FromMileageInputStyled
            name="fromMileage"
            onKeyDown={onKeyPress}
            value={Number(fromMileage).toLocaleString('en-US')}
            onChange={onChange}
          />
        </MileageLabel>
        <ToMileageInputStyled name="toMileage" value={Number(toMileage).toLocaleString('en-US')} onChange={onChange} />
      </MileageBoxStyled>
      <Button caption={'Search'} styles={{ width: '136px', height: '48px' }} onClick={onSearch} />
    </FilterContainerStyled>
  );
};

export default Filter;

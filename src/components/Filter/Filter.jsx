import {
  FilterContainerStyled,
  FromMileageInputStyled,
  MileageLabel,
  ToMileageInputStyled,
  MileageBoxStyled,
  MileageInputBoxStyled,
  MileageInputCaptionStyled,
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

  const onSearch = () => getFilter({ brand, price, toMileage, fromMileage });

  const onChange = ({ target: { name, value } }) => {
    value = value && Number(value.replaceAll(',', ''));
    switch (name) {
      case 'fromMileage':
        setFromMileage(value);
        return;
      case 'toMileage':
        setToMileage(value);
        return;
      default:
        return;
    }
  };

  const onKeyDown = ({ key, preventDefault }) => {
    const pattern = /[0-9]/;
    if (!pattern.test(key) && key !== 'Backspace' && key !== 'ArrowRight' && key !== 'ArrowLeft') {
      console.log(key);
      preventDefault();
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
          <MileageInputBoxStyled>
            {' '}
            <FromMileageInputStyled
              name="fromMileage"
              onKeyDown={onKeyDown}
              value={fromMileage.toLocaleString('en-US')}
              onChange={onChange}
            />
            <MileageInputCaptionStyled>From</MileageInputCaptionStyled>
          </MileageInputBoxStyled>
        </MileageLabel>
        <MileageInputBoxStyled>
          <ToMileageInputStyled name="toMileage" value={toMileage.toLocaleString('en-US')} onChange={onChange} />
          <MileageInputCaptionStyled>To</MileageInputCaptionStyled>
        </MileageInputBoxStyled>
      </MileageBoxStyled>
      <Button caption={'Search'} styles={{ width: '136px', height: '48px' }} onClick={onSearch} />
    </FilterContainerStyled>
  );
};

export default Filter;

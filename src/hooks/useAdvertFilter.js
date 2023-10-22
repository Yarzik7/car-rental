import { useState, useEffect } from 'react';

export const useAdvertFilter = adverts => {
  const [filter, setFilter] = useState('');
  const [filteredAdverts, setFilteredAdverts] = useState([]);

  useEffect(() => {
    setFilteredAdverts(filterAdverts(adverts, filter));
  }, [filter, adverts]);

  function filterAdverts(adverts, filterOptions) {
    const { brand, price, fromMileage, toMileage } = filterOptions;

    return adverts.filter(({ make, rentalPrice, mileage }) => {
      if (brand && make.toLowerCase() !== brand.toLowerCase()) return false;
      if (price && rentalPrice.match(/(\d+)/)[0] > price) return false;
      if (fromMileage && mileage < fromMileage) return false;
      if (toMileage && mileage > toMileage) return false;
      return true;
    });
  }

  return { filteredAdverts: filteredAdverts, setFilter: setFilter };
};

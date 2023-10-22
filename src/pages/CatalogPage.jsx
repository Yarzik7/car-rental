import { useEffect, useState } from 'react';
import CarList from '../components/CarList/CarList';
import LoadMore from '../components/LoadMore/LoadMore';
import Filter from '../components/Filter/Filter';
import { useFetchAdverts } from '../hooks';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const { data: adverts, responseLength } = useFetchAdverts(page);

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

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      <Filter getFilter={setFilter} />
      <CarList items={filteredAdverts} />
      {!(responseLength < 8) && <LoadMore onClick={handleLoadMore} />}
    </>
  );
};

export default CatalogPage;

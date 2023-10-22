import { useState } from 'react';
import CarList from '../components/CarList/CarList';
import LoadMore from '../components/LoadMore/LoadMore';
import Filter from '../components/Filter/Filter';
import { useFetchAdverts, useAdvertFilter } from '../hooks';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const { data: adverts, responseLength } = useFetchAdverts(page);
  const { filteredAdverts, setFilter } = useAdvertFilter(adverts);

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

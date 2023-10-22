import CarList from '../components/CarList/CarList';
import Filter from '../components/Filter/Filter';
import { useState, useEffect } from 'react';
import { useLocalStorage, useAdvertFilter } from '../hooks';
import { getAdvertById } from '../utils/api/getAdvertById';

const FavoritesPage = () => {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const { filteredAdverts, setFilter } = useAdvertFilter(favoriteAdverts);
  const [, setError] = useState(null);
  const [ids] = useLocalStorage('ids', []);

  useEffect(() => {
    const responseResolved = fetchedData => {
      const newFavoriteAdverts = fetchedData
        .filter(({ value }) => value)
        .map(({ value }) => value);
      setFavoriteAdverts(prevValue => [...prevValue, ...newFavoriteAdverts]);
    };

    const responseRejected = error => {
      setError(error);
    };

    const getFavoriteAdverts = ids => {
      const requests = ids.map(id => getAdvertById(id));
      return Promise.allSettled(requests);
    };

    getFavoriteAdverts(ids).then(responseResolved).catch(responseRejected);
  }, [ids]);

  return (
    <>
      <Filter getFilter={setFilter} />
      <CarList items={filteredAdverts} />;
    </>
  );
};

export default FavoritesPage;

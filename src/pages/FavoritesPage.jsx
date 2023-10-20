import CarList from "../components/CarList/CarList";
import { useState, useEffect } from "react";
import { useFetchAdverts, useLocalStorage } from "../hooks";
import { getAdvertById } from "../utils/api/getAdvertById";

const FavoritesPage = () => {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const [error, setError] = useState(null);
  const [ids, setIds] = useLocalStorage("ids", []);

  console.log("fav: ", favoriteAdverts);

  useEffect(() => {
    const responseResolved = (fetchedData) => {
      const newFavoriteAdverts = fetchedData
        .filter(({ value }) => value)
        .map(({ value }) => value);
      setFavoriteAdverts((prevValue) => [...prevValue, ...newFavoriteAdverts]);
    };

    const responseRejected = (error) => {
      setError(error);
    };

    const getFavoriteAdverts = (ids) => {
      const requests = ids.map((id) => getAdvertById(id));
      return Promise.allSettled(requests);
    };

    getFavoriteAdverts(ids).then(responseResolved).catch(responseRejected);
  }, [ids]);


  return <CarList items={favoriteAdverts}/>;
};

export default FavoritesPage;

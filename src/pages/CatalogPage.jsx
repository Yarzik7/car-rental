import { useState } from "react";
import CarList from "../components/CarList/CarList";
import LoadMore from "../components/LoadMore/LoadMore";
import Filter from "../components/Filter/Filter";
import { useFetchAdverts, useLocalStorage } from "../hooks";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [ids, setIds] = useLocalStorage("ids", []);
  const { data: adverts, responseLength } = useFetchAdverts(page);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Filter />
      <CarList items={adverts} />
      {!(responseLength < 8) && <LoadMore onClick={handleLoadMore} />}
    </>
  );
};

export default CatalogPage;

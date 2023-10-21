import { useEffect, useState } from "react";
import CarList from "../components/CarList/CarList";
import LoadMore from "../components/LoadMore/LoadMore";
import Filter from "../components/Filter/Filter";
import { useFetchAdverts, useLocalStorage } from "../hooks";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [ids, setIds] = useLocalStorage("ids", []);
  const [filter, setFilter] = useState("");
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const { data: adverts, responseLength } = useFetchAdverts(page);

  console.log("filter: ", filter);

  useEffect(() => {
    setFilteredAdverts(
      adverts.filter(
        ({ make, rentalPrice }) =>
          (make.includes(filter.brand) &&
            Number(rentalPrice.match(/(\d+)/)[0]) <= filter.price) ||
          !filter.price
      )
    );
  }, [filter, adverts]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Filter getFilter={setFilter} />
      <CarList items={filteredAdverts} />
      {!(responseLength < 8) && <LoadMore onClick={handleLoadMore} />}
    </>
  );
};

export default CatalogPage;

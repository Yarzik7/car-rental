import { useState } from "react";
import CarList from "../components/CarList/CarList";
import LoadMore from "../components/LoadMore/LoadMore";
import { useLocalStorage, useFetchAdverts } from "../hooks";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const { data: adverts, responseLength, error } = useFetchAdverts(page);
  const [ids, setIds] = useLocalStorage("ids", []);

  console.log("pages: ", page);
  console.log("items: ", adverts);
  console.log("errors: ", error);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <CarList items={adverts} />
      {!(responseLength < 8) && <LoadMore onClick={handleLoadMore} />}
    </>
  );
};

export default CatalogPage;

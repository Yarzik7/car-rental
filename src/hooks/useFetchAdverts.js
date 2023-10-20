import { useState, useEffect } from "react";
import { getAdverts } from "../utils/api/getAdverts";

const useFetchAdverts = (page) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [responseLength, setResponseLength] = useState(0);

  useEffect(() => {
    const responseResolved = (newAdverts) => {
      setFetchedData((prevValue) => [...prevValue, ...newAdverts]);
      setResponseLength(newAdverts.length);
    };

    const responseRejected = (error) => {
      setError(error);
    };

    // if (page === 1) {
    //   setFetchedData([]);
    // }

    getAdverts({ page, limit: 8 })
      .then(responseResolved)
      .catch(responseRejected);
  }, [page]);

  return { data: fetchedData, error, responseLength };
};

export { useFetchAdverts };

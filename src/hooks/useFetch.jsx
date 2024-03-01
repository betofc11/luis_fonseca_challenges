import React, { useEffect, useState } from "react";

const useFetch = (URL, initialData) => {
  const [data, setData] = useState(initialData);
  const [isFetching, setIsFetching] = useState(true);
  const [url, setURL] = useState(URL);
  const [next, setNext] = useState("");
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      const data = await fetch(url).then((res) => res.json());
      setData(data.results);
      setNext(data.next);
      setIsFetching(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setIsFetching(true)

    fetchData();
  }, [url]);

  const nextPage = () => {
    setURL(next);
    setPage((prev) => (prev += 1));
  };

  return [isFetching, data, nextPage, page];
};

export default useFetch;

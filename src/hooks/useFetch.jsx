import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [movies, setMovies] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return resp.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, [url]);
  return { movies, isPending, error };
};

export default useFetch;

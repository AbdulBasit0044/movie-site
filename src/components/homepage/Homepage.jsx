// import React from 'react';
import Movie from "../movie/Movie";
import { MovieContainer } from "./Styles/StyleMovieContainer";
import { GetMovies } from "../../API/movies";
import { useEffect, useState } from "react";

export const MovieContext = React.createContext();

const Homepage = () => {
  const [movies, setMovies] = useState(null);
  const movieContextValue = {
    movies
  }
  useEffect(() => {
    async function FetchData() {
      const data = await GetMovies().then((resp) => {
        return resp;
      });
      setMovies(data);
    }
    FetchData();
  }, []);

  return (
    <MovieContextProvider value={movieContextValue}>
      <MovieContainer>
      {!movies && <div>Loading...</div>}
      {movies && <Movie movies={movies} />}
    </MovieContainer>
    </MovieContextProvider>
  );
};

export default Homepage;

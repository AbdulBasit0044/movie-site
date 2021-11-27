import React from 'react';
import Movie from "../movie/Movie";
import { MovieContainer } from "./Styles/StyleMovieContainer";
import { GetMovies } from "../../API/movies";
import { useEffect, useState } from "react";
import { GetMoviesBasedOnId } from "../../API/movies";

export const MovieContext = React.createContext();

const Homepage = () => {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState();
  const movieContextValue = {
    movies,
    selectedMovie,
    fetchDataBasedOnId
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

  function fetchDataBasedOnId(id){
    console.log(id);
    async function FetchData() {
      const movie = await GetMoviesBasedOnId(id).then((resp) => {
        return resp;
      });
      setSelectedMovie(movie);
    }
    FetchData();
  }

  return (
    <MovieContext.Provider value={movieContextValue}>
      <MovieContainer>
        {!movies && <div>Loading...</div>}
        {movies && <Movie />}
      </MovieContainer>
    </MovieContext.Provider>
  );
};

export default Homepage;

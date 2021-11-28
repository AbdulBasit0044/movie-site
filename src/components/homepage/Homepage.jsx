<<<<<<< HEAD
import React from 'react';
=======
// import React from 'react';
>>>>>>> 832647c2eb7a455103a249858366ca6e54ea101f
import Movie from "../movie/Movie";
import { MovieContainer } from "./Styles/StyleMovieContainer";
import { GetMovies } from "../../API/movies";
import { useEffect, useState } from "react";
import { GetMoviesBasedOnId } from "../../API/movies";

export const MovieContext = React.createContext();

export const MovieContext = React.createContext();

const Homepage = () => {
  const [movies, setMovies] = useState(null);
<<<<<<< HEAD
  const [selectedMovie, setSelectedMovie] = useState();
  const movieContextValue = {
    movies,
    selectedMovie,
    fetchDataBasedOnId
=======
  const movieContextValue = {
    movies
>>>>>>> 832647c2eb7a455103a249858366ca6e54ea101f
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
<<<<<<< HEAD
    <MovieContext.Provider value={movieContextValue}>
      <MovieContainer>
        {!movies && <div>Loading...</div>}
        {movies && <Movie />}
      </MovieContainer>
    </MovieContext.Provider>
=======
    <MovieContextProvider value={movieContextValue}>
      <MovieContainer>
      {!movies && <div>Loading...</div>}
      {movies && <Movie movies={movies} />}
    </MovieContainer>
    </MovieContextProvider>
>>>>>>> 832647c2eb7a455103a249858366ca6e54ea101f
  );
};

export default Homepage;

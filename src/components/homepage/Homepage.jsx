<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React from 'react';
=======
// import React from 'react';
>>>>>>> 832647c2eb7a455103a249858366ca6e54ea101f
>>>>>>> f16a6e518f02d6f5b56c559c0ab6af3df7540bd5
import Movie from "../movie/Movie";
import { MovieContainer } from "./Styles/StyleMovieContainer";
import { GetMovies } from "../../API/movies";
import { useEffect, useState } from "react";
import { GetMoviesBasedOnId } from "../../API/movies";

export const MovieContext = React.createContext();

const Homepage = () => {
  const [movies, setMovies] = useState(null);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f16a6e518f02d6f5b56c559c0ab6af3df7540bd5
  const [selectedMovie, setSelectedMovie] = useState();
  const movieContextValue = {
    movies,
    selectedMovie,
    fetchDataBasedOnId
<<<<<<< HEAD
=======
=======
  const movieContextValue = {
    movies
>>>>>>> 832647c2eb7a455103a249858366ca6e54ea101f
>>>>>>> f16a6e518f02d6f5b56c559c0ab6af3df7540bd5
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
=======
<<<<<<< HEAD
>>>>>>> f16a6e518f02d6f5b56c559c0ab6af3df7540bd5
    <MovieContext.Provider value={movieContextValue}>
      <MovieContainer>
        {!movies && <div>Loading...</div>}
        {movies && <Movie />}
      </MovieContainer>
    </MovieContext.Provider>
<<<<<<< HEAD
=======
=======
    <MovieContextProvider value={movieContextValue}>
      <MovieContainer>
      {!movies && <div>Loading...</div>}
      {movies && <Movie movies={movies} />}
    </MovieContainer>
    </MovieContextProvider>
>>>>>>> 832647c2eb7a455103a249858366ca6e54ea101f
>>>>>>> f16a6e518f02d6f5b56c559c0ab6af3df7540bd5
  );
};

export default Homepage;

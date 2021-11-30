import React from 'react';
import Movie from "../movie/Movie";
import { MovieContainer } from "./Styles/StyleMovieContainer";
import {MovieProvider} from '../../contexts/MovieContext';

const Homepage = () => {
  
  return (
    <MovieProvider>
      <MovieContainer>
        <Movie />
      </MovieContainer>
    </MovieProvider>
  );
};

export default Homepage;

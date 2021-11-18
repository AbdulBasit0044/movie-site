import { useState, useEffect } from 'react'
import Movie from './Movie'
import useFetch from './useFetch';

const Homepage = () => {
    // const movies = [1, 2, 3];
    const url = 'http://localhost:8001/movies';
    const { movies, isPending, error } = useFetch(url);
    return (
        <div className="movie-container">
            {movies && < Movie movies={movies} />}
        </div>
    );
}

export default Homepage;
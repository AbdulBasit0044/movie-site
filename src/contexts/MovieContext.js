import React, { useContext, useState, useEffect } from "react";
import { GetMovies } from "../API/movies";
import { GetMoviesBasedOnId } from "../API/movies";

const MovieContext = React.createContext()

export const useMovies = () => useContext(MovieContext)

export function MovieProvider({ children }) {
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

    function fetchDataBasedOnId(id) {
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
                {children}
        </MovieContext.Provider>
    );
}
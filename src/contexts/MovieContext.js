import React, { useContext, useEffect, useReducer } from "react";
import { CreateMovie, GetMovies, UpdateMovie, DeleteMovie, AddToWatchlist } from "../API/movies";

const MovieContext = React.createContext()

export const useMovies = () => useContext(MovieContext)

const initialState = {
    movies: null,
    movie: {
        title: "",
        director: "",
        overview: "",
        rating: null,
        img: "https://img.yts.mx/assets/images/movies/1917_2019/medium-cover.jpg",
    },
    watchlist: null
}

export const ACTIONS = {
    SET_MOVIES_FIRST_TIME: "set-movies-first-time",
    SET_MOVIE_FIRST_TIME: "set-movie-first-time",
    DELETE_MOVIE: "delete-movie",
    SET_TITLE: "set-title",
    SET_DIRECTOR: "set-director",
    SET_OVERVIEW: "set-overview",
    SET_RATING: "set-rating",
    SET_IMG: "set-img",
    SET_CREATE_MOVIE: "create-movie",
    SUBMIT_EDIT_MOVIE: "submit-edit-movie",
    SET_WATCHLIST: "set-watchlist",
    ADD_TO_WATCHLIST: "add_to_watchlist"
};

const handleDeleteMovie = async (id) => {
    return await DeleteMovie(id).then((resp) => {
        return resp;
    });
}

const handleCreateMovie = async (movie) => {
    return await CreateMovie(movie).then((resp) => {
    });
}

const handleEditMovie = async (movie) => {
    return await UpdateMovie(movie).then((resp) => {
    });
}

const handleAddToWatchlist = async (movie) => {
    return await AddToWatchlist(movie).then((resp) => {
    });
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_MOVIES_FIRST_TIME:
            return { ...state, movies: action.payload.value };
        case ACTIONS.SET_MOVIE_FIRST_TIME:
            return { ...state, movie: action.payload.movie };
        case ACTIONS.SET_TITLE:
            return { ...state, movie: { ...state.movie, title: action.payload.value } };
        case ACTIONS.SET_DIRECTOR:
            return { ...state, movie: { ...state.movie, director: action.payload.value } };
        case ACTIONS.SET_OVERVIEW:
            return { ...state, movie: { ...state.movie, overview: action.payload.value } };
        case ACTIONS.SET_RATING:
            return { ...state, movie: { ...state.movie, rating: action.payload.value } };
        case ACTIONS.SET_IMG:
            return { ...state, movie: { ...state.movie, img: action.payload.value } };
        case ACTIONS.DELETE_MOVIE:
            handleDeleteMovie(action.payload.id)
            return state;
        case ACTIONS.SET_CREATE_MOVIE:
            handleCreateMovie(action.payload.movie)
            return state;
        case ACTIONS.SUBMIT_EDIT_MOVIE:
            handleEditMovie(action.payload.movie)
            return state;
        case ACTIONS.ADD_TO_WATCHLIST:
            handleAddToWatchlist(action.payload.value)
            state.watchlist.push(action.payload.value)
            return { ...state };
        case ACTIONS.SET_WATCHLIST:
            return { ...state, watchlist: action.payload.value };
        default:
            return;
    }
}

export function MovieProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const movieContextValue = { ...state, dispatch };

    useEffect(() => {
        async function FetchData() {
            const data = await GetMovies().then((resp) => {
                return resp;
            });
            dispatch({
                type: ACTIONS.SET_MOVIES_FIRST_TIME,
                payload: { value: data }
            })
        }
        FetchData();
    }, []);

    return (
        <MovieContext.Provider value={movieContextValue}>
            {children}
        </MovieContext.Provider>
    );
}

export const withMovies = (Component) => {
    const TempConsumer = (props) => {
        const values = useMovies();
        return <Component {...props} values={values} />
    }
    return TempConsumer;
};

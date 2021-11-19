import Movie from "../movie/Movie";
import { MovieContainer } from "./Styles/StyleMovieContainer";
import { GetMovies } from "../../API/movies";

const Homepage = () => {
  const { movies, isPending, error } = GetMovies();
  return (
  <MovieContainer>
    {movies && <Movie movies={movies} />}
    </MovieContainer>
    )
};

export default Homepage;

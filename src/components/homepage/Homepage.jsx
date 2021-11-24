import Movie from "../movie/Movie";
import { MovieContainer } from "./Styles/StyleMovieContainer";
import { GetMovies } from "../../API/movies";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [movies, setMovies] = useState(null);

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
    <MovieContainer>
      {!movies && <div>Loading...</div>}
      {movies && <Movie movies={movies} />}
    </MovieContainer>
  );
};

export default Homepage;

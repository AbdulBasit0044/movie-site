import { Link } from "react-router-dom";

const Movie = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <div className="movie">
            <div className="movie-img">
              <img src={movie.img} alt="" />
            </div>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span>{movie.rating}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Movie;

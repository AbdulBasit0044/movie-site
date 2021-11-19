import { useNavigate, useParams } from "react-router-dom";
import { GetMoviesBasedOnId, DeleteMovie } from "../../API/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies: movie, isPending, error } = GetMoviesBasedOnId(id);
  const handleDelete = async () => {
    await DeleteMovie(movie.id).then((resp) => {
      resp?.ok && navigate("/");
    });
  };
  return (
    <div className="movie-details">
      {movie && (
        <article>
          <h2>Title {movie.title}</h2>
          <img src={movie?.img} />
          <p>Directed by {movie?.director}</p>
          <div>{movie.overview}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default MovieDetails;

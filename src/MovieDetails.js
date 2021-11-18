import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log("params are ", id);
    const url = 'http://localhost:8001/movies/';
    const { movies: movie, isPending, error } = useFetch(url + id)

    const handleDelete = () => {
        fetch('http://localhost:8001/movies/' + movie.id, {
            method: 'DELETE',
        }).then(resp => {
            navigate('/');
        })
    }
    return (
        <div className="movie-details">
            {movie && (
                <article>
                    <h2>Title {movie.title}</h2>
                    <img src={movie.img} />
                    <p>Directed by {movie.director}</p>
                    <div>{movie.overview}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    );
}

export default MovieDetails;
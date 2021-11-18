import { Link } from 'react-router-dom';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ movies }) => {
    return (
        <>
            {movies.map(movie => (
                <Link to={`/movies/${movie.id}`}>
                    <div className="movie">
                        <div className="movie-img" key={movie.id}>
                            <img src={movie.img} alt="" />
                        </div>
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <span>{movie.rating}</span>
                        </div>
                    </div>
                </Link>
            )
            )}
        </>

    );
}

export default Movie;
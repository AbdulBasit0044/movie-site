import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetMoviesBasedOnId, UpdateMovie } from "../../API/movies";
import { CreateStyleWrapper } from "./Styles/CreateStyleWrapper";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [overview, setOverview] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");
  
  useEffect(() => {
    async function FetchData() {
      const movie = await GetMoviesBasedOnId(id).then((resp) => {
        return resp;
      });
      setMovie(movie);
      if (movie != null) {
        setTitle(movie.title);
        setDirector(movie.director);
        setOverview(movie.overview);
        setRating(movie.rating);
        setImg(movie.img);
      }
    }
    FetchData();
  }, []);

  const handleEditMovieSubmit = async (e) => {
    e.preventDefault();
    const movie = { title, director, overview, rating, img, id };
    await UpdateMovie(movie).then((resp) => {
      resp?.ok && navigate(`/movies/${id}`);
    });
  };
  return (
    <CreateStyleWrapper>
      <h2>Edit this movie details</h2>
      <form onSubmit={handleEditMovieSubmit}>
        <label>Movie Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Director Name</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <label>Overview</label>
        <input
          type="text"
          value={overview}
          required
          onChange={(e) => setOverview(e.target.value)}
        />
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          min = {0}
          max = {10}
          step = {0.1}
          onChange={(e) => setRating(e.target.value !==""?parseFloat(e.target.value):"")}
        />
        <label>Cover Image Link</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button>Update Movie</button>
      </form>
    </CreateStyleWrapper>
  );
};

export default Edit;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateMovie } from "../../API/movies";
import { CreateStyleWrapper } from "./Styles/CreateStyleWrapper";

const Create = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [overview, setOverview] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState(
    "https://img.yts.mx/assets/images/movies/1917_2019/medium-cover.jpg"
  );
  const navigate = useNavigate();
 
  const handleAddMovieSubmit = async (e) => {
    e.preventDefault();
    const movie = { title, director, overview, rating, img };
    await CreateMovie(movie).then((resp) => {
      resp?.ok && navigate("/");
    });
  };
  return (
    <CreateStyleWrapper>
      <h2>Add new movie</h2>
      <form onSubmit={handleAddMovieSubmit}>
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
          onChange={(e) => setRating(e.target.value !== ''?parseFloat(e.target.value):"")}
        />
        <label>Cover Image Link</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button>Add Movie</button>
      </form>
    </CreateStyleWrapper>
  );
};

export default Create;

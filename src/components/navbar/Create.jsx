import { useNavigate } from "react-router-dom";
import { CreateStyleWrapper } from "./Styles/CreateStyleWrapper";
import { withMovies, ACTIONS } from "../../contexts/MovieContext";

const Create = (props) => {
  const title = props.values.movie.title;
  const director = props.values.movie.director;
  const overview = props.values.movie.overview;
  const rating = props.values.movie.rating;
  const img = props.values.movie.img;
  const navigate = useNavigate();
  const dispatch = props.values.dispatch;

  const handleAddMovieSubmit = (e) => {
    e.preventDefault();
    const movie = { title, director, overview, rating, img };
    dispatch({
      type: ACTIONS.SET_CREATE_MOVIE,
      payload: { movie: movie },
    });
    navigate("/");
    
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
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_TITLE,
              payload: { value: e.target.value },
            })
          }
        />
        <label>Director Name</label>
        <input
          type="text"
          value={director}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_DIRECTOR,
              payload: { value: e.target.value },
            })
          }
        />
        <label>Overview</label>
        <input
          type="text"
          value={overview}
          required
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_OVERVIEW,
              payload: { value: e.target.value },
            })
          }
        />
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          min={0}
          max={10}
          step={0.1}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_RATING,
              payload: {
                value: e.target.value !== "" ? parseFloat(e.target.value) : "",
              },
            })
          }
        />
        <label>Cover Image Link</label>
        <input
          type="text"
          value={img}
          onChange={(e) => dispatch({
            type: ACTIONS.SET_IMG,
            payload: {
              value: e.target.value,
            },
          })}
        />
        <button>Add Movie</button>
      </form>
    </CreateStyleWrapper>
  );
};

export default withMovies(Create);

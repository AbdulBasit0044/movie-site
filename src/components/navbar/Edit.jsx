import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetMoviesBasedOnId } from "../../API/movies";
import { CreateStyleWrapper } from "./Styles/CreateStyleWrapper";
import { withMovies, ACTIONS } from "../../contexts/MovieContext";

const Edit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const title = props.values.title;
  const director = props.values.director;
  const overview = props.values.overview;
  const rating = props.values.rating;
  const img = props.values.img;
  const dispatch = props.values.dispatch;
  const movie = props.values.movie;

  useEffect(() => {
    async function FetchData() {
      const movie = await GetMoviesBasedOnId(id).then((resp) => {
        return resp;
      });
      dispatch({ type: ACTIONS.SET_MOVIE_FIRST_TIME, payload: { movie: movie } });
      if (movie != null) {
        dispatch({ type: ACTIONS.SET_TITLE, payload: { value: movie.title } });
        dispatch({
          type: ACTIONS.SET_DIRECTOR,
          payload: { value: movie.director },
        });
        dispatch({
          type: ACTIONS.SET_OVERVIEW,
          payload: { value: movie.overview },
        });
        dispatch({
          type: ACTIONS.SET_RATING,
          payload: { value: movie.rating },
        });
        dispatch({ type: ACTIONS.SET_IMG, payload: { value: movie.img } });
      }
    }
    FetchData();
  }, []);

  const handleEditMovieSubmit = (e) => {
    e.preventDefault();
    const movie = { title, director, overview, rating, img, id };
    dispatch({ type: ACTIONS.SUBMIT_EDIT_MOVIE, payload: { movie: movie } });
    navigate(`/movies/${id}`);
    
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
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_IMG,
              payload: {
                value: e.target.value,
              },
            })
          }
        />
        <button>Update Movie</button>
      </form>
    </CreateStyleWrapper>
  );
};

export default withMovies(Edit);

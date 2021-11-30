import { useNavigate, useParams, Link } from "react-router-dom";
import { GetMoviesBasedOnId } from "../../API/movies";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
  CardActions,
  Button,
  styled,
  Box,
  Paper,
} from "@mui/material";
import StarRatingComponent from "react-star-rating-component";
import { WatchListButtinWrapper } from "./Styles/WatchlistButtonWrapper";
import { withMovies, ACTIONS } from "../../contexts/MovieContext";

const MovieDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = props.values.movie;
  const dispatch = props.values.dispatch;

  useEffect(() => {
    async function FetchData() {
      const movie = await GetMoviesBasedOnId(id).then((resp) => {
        return resp;
      });
      dispatch({
        type: ACTIONS.SET_MOVIE_FIRST_TIME,
        payload: { movie: movie },
      });
    }
    FetchData();
  }, []);

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_MOVIE, payload: { id: movie.id } });
    navigate("/");
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      {movie && (
        <Box sx={{ flexGrow: 1, marginTop: 10 }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3}>
              <Card
                sx={{ maxWidth: 300, alignItems: "center", justify: "center" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={movie?.img}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
              <WatchListButtinWrapper>
                <Link
                  to={`/watchlist/${id}`}
                  style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                  }}
                >
                  Add to Watchlist
                </Link>
              </WatchListButtinWrapper>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="span">
                      {movie?.title}
                    </Typography>
                    <p>Directed by {movie?.director}</p>
                    <StarRatingComponent
                      name="rating"
                      starCount={10}
                      value={movie.rating}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ fontSize: 16, lineHeight: 2.5 }}
                    >
                      {movie?.overview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Item>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link style={{ textDecoration: "none" }} to={`/edit/${id}`}>
                  <Button size="small">Edit</Button>
                </Link>
                <Button size="small" onClick={handleDelete}>
                  Delete
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default withMovies(MovieDetails);

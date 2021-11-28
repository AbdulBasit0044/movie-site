import { useNavigate, useParams } from "react-router-dom";
import { GetMoviesBasedOnId, DeleteMovie } from "../../API/movies";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import StarRatingComponent from "react-star-rating-component";
import { WatchListButtinWrapper } from "./Styles/WatchlistButtonWrapper";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function FetchData() {
      const movie = await GetMoviesBasedOnId(id).then((resp) => {
        return resp;
      });
      setMovie(movie);
    }
    FetchData();
  }, []);
  const handleDelete = async () => {
    await DeleteMovie(movie.id).then((resp) => {
      resp?.ok && navigate("/");
    });
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f16a6e518f02d6f5b56c559c0ab6af3df7540bd5
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
                    object-fit
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
                    <Typography gutterBottom variant="h4" component="div">
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
<<<<<<< HEAD
=======
=======
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={movie?.img}
                  alt="green iguana"
                  object-fit
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {movie?.title}
                  </Typography>
                  <p>
                    Directed by {movie?.director} {movie?.rating}
                  </p>
                  <Typography variant="body2" color="text.secondary">
                    {movie?.overview}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Link to={`/edit/${id}`}>
                    <Button size="small">Edit</Button>
                  </Link>
                  <Button size="small" onClick={handleDelete}>
                    Delete
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
>>>>>>> 832647c2eb7a455103a249858366ca6e54ea101f
>>>>>>> f16a6e518f02d6f5b56c559c0ab6af3df7540bd5
      )}
    </>
  );
};

export default MovieDetails;

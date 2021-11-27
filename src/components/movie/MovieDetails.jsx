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

  return (
    <div className="movie-details">
      {movie && (
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
      )}
    </div>
  );
};

export default MovieDetails;

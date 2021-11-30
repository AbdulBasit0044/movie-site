import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";
import StarRatingComponent from "react-star-rating-component";
import { useMovies } from "../../contexts/MovieContext";

const Movie = () => {
  const  values = useMovies();
  const  movies  = values.movies;

  return (
    <>
      {movies?.map((movie) => (
        <Link
          key={movie.id}
          style={{ textDecoration: "none" }}
          to={`/movies/${movie.id}`}
        >
          <div className="movie">
            {movie && (
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={2}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={movie?.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="span">
                          {movie?.title}
                        </Typography>
                        <p>Director: {movie?.director}</p>
                        <span>
                          <StarRatingComponent
                            name="rating"
                            starCount={10}
                            value={movie.rating}
                          />
                        </span>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            )}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Movie;

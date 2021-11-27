import { Link } from "react-router-dom";
import { MovieContext } from "../homepage/Homepage";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import StarRatingComponent from "react-star-rating-component";

const Movie = () => {
  const { movies } = useContext(MovieContext);

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
                // style={{ minHeight: "100vh" }}
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
                        <p>Director: {movie?.director}</p>
                        <p>
                          <StarRatingComponent
                            name="rating"
                            starCount={10}
                            value={movie.rating}
                          />
                        </p>
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

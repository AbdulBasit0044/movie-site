import * as React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  GetMoviesBasedOnId,
  GetWatchlist,
} from "../../API/movies";
import {
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@mui/material";
import { withMovies, ACTIONS } from "../../contexts/MovieContext";

const Watchlist = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const watchlist = props.values.watchlist;
  const dispatch = props.values.dispatch; 

  useEffect(() => {
    async function FetchData() {
      const watchlist = await GetWatchlist().then((resp) => {
        return resp;
      });
      dispatch({
        type: ACTIONS.SET_WATCHLIST,
        payload: { value: watchlist },
      });
    }
    FetchData();
  }, []);

  useEffect(() => {
    async function FetchData() {
      const movie = await GetMoviesBasedOnId(id).then((resp) => {
        return resp;
      });
      dispatch({
        type: ACTIONS.ADD_TO_WATCHLIST,
        payload: { value: movie },
      });
    navigate(`/watchlist`);
    }
    if (id) FetchData();
  }, []);

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);
    return color;
  }
  return (
    <>
      {watchlist?.map((movie) => (
        <List
          key={movie.id}
          sx={{ width: "100%", maxWidth: 360, paddingLeft:10, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                style={{
                  backgroundColor: randomColor(),
                }}
                alt={`${movie.title}`.charAt(0)}
                src={movie.img}
              />
            </ListItemAvatar>
            <ListItemText
              primary={movie.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {movie.director}
                  </Typography>
                  `{` — ${movie.director}`}`
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </>
  );
};

export default withMovies(Watchlist);

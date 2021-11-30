import * as React from "react";
import { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GetMoviesBasedOnId,
  GetWatchlist,
  AddToWatchlist,
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

const ACTIONS = {
  SET_WATCHLIST: "set-watchlist",
  ADD_TO_WATCHLIST: "add_to_watchlist"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_WATCHLIST:
      return state = [...state, action.payload.value];
    case ACTIONS.SET_WATCHLIST:
      return (state = action.payload.value);
    default:
      return;
  }
}

const Watchlist = () => {
  const { id } = useParams();
  const [watchlist, setWatchlist] = useReducer(reducer, null);

  useEffect(() => {
    async function FetchData() {
      const watchlist = await GetWatchlist().then((resp) => {
        return resp;
      });
      setWatchlist({type: ACTIONS.SET_WATCHLIST, payload:{ value: watchlist}});
    }
    FetchData();
  }, []);

  useEffect(() => {
    async function FetchData() {
      const movie = await GetMoviesBasedOnId(id).then((resp) => {
        return resp;
      });
      AddToWatchlist(movie);
      setWatchlist({type: ACTIONS.ADD_TO_WATCHLIST, payload:{ value: movie}});
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

export default Watchlist;

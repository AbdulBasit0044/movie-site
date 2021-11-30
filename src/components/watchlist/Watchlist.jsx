import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GetMoviesBasedOnId,
  GetWatchlist,
  AddToWatchlist,
} from "../../API/movies";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Watchlist = () => {
  const { id } = useParams();
  const [watchlist, setWatchlist] = useState(null);

  useEffect(() => {
    async function FetchData() {
      const watchlist = await GetWatchlist().then((resp) => {
        return resp;
      });
      setWatchlist(watchlist);
    }
    FetchData();
  }, []);

  useEffect(() => {
    async function FetchData() {
      const movie = await GetMoviesBasedOnId(id).then((resp) => {
        return resp;
      });
      AddToWatchlist(movie);
      setWatchlist((watchlist) => [...watchlist, movie]);
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
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                style={{
                  backgroundColor: randomColor(),
                }}
                alt={`${movie.title}`.charAt(0)}
                src="/static/images/avatar/1.jpg"
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

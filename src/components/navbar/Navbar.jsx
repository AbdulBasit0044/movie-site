import { Link } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Button from "@mui/material/Button";
import { Wrapper } from "./Styles/StyleNav";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          endIcon={
            <TheatersIcon
              style={{
                maxWidth: "40px",
                maxHeight: "40px",
                minWidth: "40px",
                minHeight: "40px",
              }}
            />
          }
        >
          <h2>The Movie Site</h2>
        </Button>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link
          to="/watchlist"
          style={{
            color: "white",
            borderRadius: "8px",
          }}
        >
          <Button
          variant="outlined"
          size="medium"
          color="secondary"
          endIcon={
            <LiveTvIcon
              style={{
                maxWidth: "40px",
                maxHeight: "40px",
                minWidth: "40px",
                minHeight: "40px",
              }}
            />
          }
        >
          Watchlist
        </Button>
          
        </Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Add New Movie
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;

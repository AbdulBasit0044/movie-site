import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Create from "./components/navbar/Create";
import Edit from "./components/navbar/Edit";
import About from "./components/about/About";
import MovieDetails from "./components/movie/MovieDetails";
import NotFound from "./components/NotFound/NotFound";
import Watchlist from "./components/watchlist/Watchlist";
import { MovieProvider } from "../src/contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="create" element={<Create />} />
            <Route path="movies/:id" element={<MovieDetails />} />
            <Route path="edit/:id" element={<Edit />} />
            <Route path="watchlist/" element={<Watchlist />} />
            <Route path="watchlist/:id" element={<Watchlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;

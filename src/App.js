import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Create from './Create';
import About from './About';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;

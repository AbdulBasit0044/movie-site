import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Create from './components/homepage/Create';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;

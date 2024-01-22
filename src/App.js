import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;

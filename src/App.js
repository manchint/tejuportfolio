import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
    </Router>
    </div>
  );
}

export default App;

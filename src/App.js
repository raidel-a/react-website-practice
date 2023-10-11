import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/products" element={<Menu />} />
          {/* 404 page */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

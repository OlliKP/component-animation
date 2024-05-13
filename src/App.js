import React from 'react';
import './App.css';
import TabBar from './Components/TabBar/TabBar';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import About from './Components/Pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <TabBar />
    </Router>
  );
}

export default App;
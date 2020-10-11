import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navebar'
import Ribbon from './components/Ribbon/Ribbon'
import Product from './components/Products/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ribbon />
      <Product />
    </div>
  );
}

export default App;

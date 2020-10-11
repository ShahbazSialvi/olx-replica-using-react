import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navebar';
import Ribbon from './components/Ribbon/Ribbon';
import Product from './components/Products/Product';
import Poster from './components/poster/Poster';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ribbon />
      <Product />
      <Poster />
      <Footer />
    </div>
  );
}

export default App;

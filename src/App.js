import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navebar'
import PracMap from './components/Navbar/pracMap'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PracMap />
    </div>
  );
}

export default App;

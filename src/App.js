import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper clear">

      {/* <div className="overlay"> */}
      <div style={{ display: 'none' }} className="overlay">

        <Drawer />
      </div>
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40 ">
          <h1 >All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />

          </div>
        </div>

        <div className="d-flex">
          <Card />
          <Card />




        </div>

      </div>
    </div >
  );
}

export default App;

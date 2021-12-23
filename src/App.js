import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
// import { Link } from 'react-router-dom';


const array = [
  { name: `Men's shoes  Nike Blazed`, price: 445 },
  { name: `Men's shoes  Nike Blazed 007`, price: 576 },
  { name: `Men's shoes  Nike BV`, price: 700 },
  { name: `Men's shoes  Nike Something`, price: 345 }
]

function App() {

  return (
    <div className="wrapper clear">
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
          {
            array.map((obj) => (
              <Card />
            ))}
        </div>
      </div>
    </div >
  );
}

export default App;

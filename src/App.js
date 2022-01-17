import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
// import { Link } from 'react-router-dom';


const array = [
  { title: `Men's shoes  Nike Blazed`, price: 445, imageUrl: '/img/sneakers/2.jpg' },
  { title: `Men's shoes  Nike Blazed 007`, price: 576, imageUrl: '/img/sneakers/3.jpg' },
  { title: `Men's shoes  Nike BV`, price: 700, imageUrl: '/img/sneakers/4.jpg' },
  { title: `Men's shoes  Nike Something`, price: 345, imageUrl: '/img/sneakers/5.jpg' }
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
          {/* <Card
            title={array.name}
            price={array.price}
          /> */}


          {
            array.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            ))}


        </div>
      </div>
    </div >
  );
}

export default App;

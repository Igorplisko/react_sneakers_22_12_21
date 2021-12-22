import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper clear">

      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer d-flex ">
          <h2 className="mb-20 d-flex justify-between cu-p">Корзина
            <img
              // onClick={() => onRemove(obj.id)}
              className="removeBtn"
              src="img/btn-remove.svg"
              alt="Remove"
            />

          </h2>


          <div className="cartItem d-flex align-center mb-20">
            {/* <img
              className='mr-15'
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt=""
            /> */}

            <div style={{ backgroundImage: `url("/img/sneakers/1.jpg")` }}
              className="cartItemImg"></div>

            <div className="mr-2">
              <p className="mb-5"> Мужские кросовки NIke Air MAx 270</p>
              <b>500 $</b>
            </div>
            <img
              // onClick={() => onRemove(obj.id)}
              className="removeBtn"
              src="img/btn-remove.svg"
              alt="Remove"
            />


          </div>


          <div className='items'>
            <div className="cartTotalBlock">
              <ul >
                <li >
                  <span>Итого: </span>
                  <div></div>
                  <b>800$</b>
                </li>
                <li >
                  <span> Налог 5%:</span>
                  <div></div>
                  <b>40$ </b>
                </li>
              </ul>
              <button className="greenButton" >
                Оформить заказ
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>

            </div>



          </div>

        </div>
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

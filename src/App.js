import React from 'react';
import Card from './components/Card';
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






      <header className="d-flex justify-between align-center p-40">
        {/* <Link to="/"> */}
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        {/* </Link> */}
        <ul className="d-flex">
          <li className="mr-30 cu-p">
            <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
            <span> 1200 грн.</span>
          </li>
          <li className="mr-20 cu-p">
            {/* <Link to="/favorites"> */}
            <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
            {/* </Link> */}
          </li>
          <li>
            {/* {/* <Link to="/orders"> */}
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
            {/* </Link> */}
          </li>
        </ul>
      </header>


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

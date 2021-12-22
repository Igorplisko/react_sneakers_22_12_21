import React from 'react';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper clear">
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

        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex">

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />

            <h5> Мужские кросовки NIke Blue</h5>
            <div className="d-flex justify-between align-center">

              <div className="d-flex flex-column ">
                <span> Price:</span>
                <b>10 999грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>


          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />

            <h5> Мужские кросовки NIke Blue</h5>
            <div className="d-flex justify-between align-center">

              <div className="d-flex flex-column ">
                <span> Price:</span>
                <b>10 999грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>



        </div>

      </div>
    </div >
  );
}

export default App;

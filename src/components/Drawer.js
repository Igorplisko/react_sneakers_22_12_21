import React from 'react'

function Drawer(props) {
   return (
      <div className="overlay ">
         <div className="drawer  ">
            <h2 className="mb-20 d-flex justify-between cu-p">Корзина
               <img
                  onClick={() => props.onClose()}
                  className="removeBtn"
                  src="img/btn-remove.svg"
                  alt="Close"
               />
            </h2>
            <div className="cartItem d-flex align-center mb-20">
               <div style={{ backgroundImage: `url("/img/sneakers/1.jpg")` }}
                  className="cartItemImg"></div>

               <div className="mr-20 flex">
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

   )
}

export default Drawer






/* <img
className='mr-15'
width={70}
height={70}
src="/img/sneakers/1.jpg"
alt=""
/> */
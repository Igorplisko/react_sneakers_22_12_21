import React from 'react'

function Drawer({ onClose, onRemove, items = [] }) {
   return (
      <div className="overlay ">
         <div className="drawer  ">
            <h2 className="mb-20 d-flex justify-between cu-p">Корзина
               <img
                  onClick={() => onClose()}
                  className="removeBtn"
                  src="img/btn-remove.svg"
                  alt="Close"
               />
            </h2>
            {items.length > 0 ? (
               <div className="d-flex flex-column flex">
                  <div className="items flex">
                     {items.map((obj) => (
                        <div key={obj.id} className="cartItem d-flex align-center mb-20">
                           <div
                              style={{ backgroundImage: `url(${obj.imageUrl})` }}
                              className="cartItemImg"></div>

                           <div className="mr-20 flex">
                              <p className="mb-5">{obj.title}</p>
                              <b>{obj.price} руб.</b>
                           </div>
                           <img
                              onClick={() => onRemove(obj.id)}
                              className="removeBtn"
                              src="img/btn-remove.svg"
                              alt="Remove" />
                        </div>
                     ))}
                  </div>
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
            )
               : (
                  <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                     <img className="mb-20" width='120px' height="120px" src="/img/empty-cart.jpg" alt="Something" />
                     <h2>Korzina is empty</h2>
                     <p>Add please At least one pair of running shoes</p>
                     <button onClick={onClose} className="greenButton">
                        <img src="/img/arrow.svg" alt="Arrow"></img>
                        Сome back
                     </button>
                  </div>
               )}

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





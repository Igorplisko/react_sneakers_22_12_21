import React from 'react';
import styles from './Card.module.scss'

const Card = (props) => {

   console.log(props);

   console.log(styles, 'What this ?');


   // const onClickButton = () => {
   //    alert(props.title)
   // }

   // const onClickPlus = () => {

   // }

   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
            <img src="img/unliked.svg" alt="Unliked" />
         </div>

         <img width={133} height={112} src={props.imageUrl} alt="" />

         <h5> {props.title}</h5>
         <div className="d-flex justify-between align-center">

            <div className="d-flex flex-column ">
               <span> Price:</span>
               <b>{props.price}</b>
            </div>
            <button className="button" onClick={props.onClick}>
               <img width={11} height={11} src="/img/plus.svg" alt="" />
            </button>
         </div>
      </div >
   );
}

export default Card;


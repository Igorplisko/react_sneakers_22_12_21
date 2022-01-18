import React from 'react';
import styles from './Card.module.scss'

const Card = (props) => {
   const [isAdded, setIsAdded] = React.useState(false)

   const onClickPlus = () => {
      setIsAdded(!isAdded)
   }



   return (
      <div className={styles.card}>
         <div className={styles.favorite} onClick={props.onClickFavorite}>
            <img src="img/unliked.svg" alt="Unliked" />
         </div>

         <img width={133} height={112} src={props.imageUrl} alt="" />

         <h5> {props.title}</h5>
         <div className="d-flex justify-between align-center">

            <div className="d-flex flex-column ">
               <span> Price:</span>
               <b>{props.price}</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="" />
         </div>
      </div >
   );
}

export default Card;

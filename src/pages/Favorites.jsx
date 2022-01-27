import React from 'react';
import Card from '../components/Card';

function Favorites({ items, onAddToFavorite }
) {
   return (
      <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40 ">
            <h1 > Мои закладки </h1>
         </div>
         <div className="d-flex flex-wrap">
            {
               items.map((item, index) => (
                  <Card
                     key={index}
                     imageUrl={item.imageUrl}
                     onFavorite={onAddToFavorite}
                     id={item.id}
                     favorited={true}
                     title={item.title}
                     price={item.price}

                  />
               ))}
         </div>
      </div>
   );
}

export default Favorites;
import React from 'react';
import Card from '../components/Card';


function Home({
   cartItems,
   items,
   searchValue,
   setSearchValue,
   onChangeSearchInput,
   onAddToFavorite,
   onAddToCart,
   isLoading
}) {

   const renderItems = () => {
      const filteredItems = items.filter((item => item.title.toLowerCase().includes(searchValue.toLowerCase())))

      return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
         <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
            loading={isLoading}
            {...item}
         // title={item.title}
         // price={item.price}
         // imageUrl={item.imageUrl}
         />
      ))
   }

   return (
      <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40 ">
            <h1 >{searchValue ? `Search by request : "${searchValue}"` : "All sneakers"}</h1>
            <div className="search-block d-flex">
               <img src="/img/search.svg" alt="Search" />
               {searchValue && < img
                  onClick={() => setSearchValue('')}
                  className=" clear cu-p"
                  src="img/btn-remove.svg"
                  alt="Clear"
               />}
               <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
            </div>
         </div>
         <div className="d-flex flex-wrap">
            {renderItems()}
         </div>
      </div>
   );
}


export default Home;
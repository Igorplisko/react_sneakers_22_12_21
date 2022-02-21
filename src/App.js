import React from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';

import axios from 'axios';
import { Route } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue,] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get("https://60ed8027a78dc700178adf66.mockapi.io/items").then((res) => {
      setItems(res.data);
    });

    axios.get("https://60ed8027a78dc700178adf66.mockapi.io/cart").then((res) => {
      setCartItems(res.data);
    });

    axios.get("https://60ed8027a78dc700178adf66.mockapi.io/favorites").then((res) => {
      setFavorites(res.data);
    });

  }, [])

  const onAddToCart = (obj) => {
    axios.delete(`https://60ed8027a78dc700178adf66.mockapi.io/cart/${obj.id}`);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post("https://60ed8027a78dc700178adf66.mockapi.io/cart", obj);
      setCartItems(prev => [...prev, obj])
    }

  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60ed8027a78dc700178adf66.mockapi.io/cart/${id}`);
    setCartItems(prev => [...prev.filter(item => item.id !== id)])
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        console.log(favorites.find((favObj) => favObj.id === obj.id));
        axios.delete(`https://60ed8027a78dc700178adf66.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post("https://60ed8027a78dc700178adf66.mockapi.io/favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("failed to add favorites")
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onRemove={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} />}
      {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} */}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path='/' exact>
        <Home
          items={items}
          // cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path='/favorites' exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div >
  );
}

export default App;


//? {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
// ?{cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}

// ! эти обе строки работают взаимо заменяемо -
//! во второй строке - (&&)  если  cartOpened являеться true, то код выполняет правую часть gjckt && если отрицательно то невыполняеться
//!    setCartItems(prev => [...prev.filter(item => item.id !== id)]) - это удаление по айдишнику


// const arr = [

//   {
//     "title": "Nike men sneakers Air max",
//     "price": 150,
//     "imageUrl": "/img/sneakers/1.jpg"
//   },
//   {
//     "title": "Nike men sneakers Blazer",
//     "price": 170,
//     "imageUrl": "/img/sneakers/2.jpg"
//   },
//   {
//     "title": "Nike men sneakers 2-18",
//     "price": 145,
//     "imageUrl": "/img/sneakers/3.jpg"
//   },
//   {
//     "title": "Nike mens sneakers Just original",
//     "price": 160,
//     "imageUrl": "/img/sneakers/4.jpg"
//   },
//   {
//     "title": "Nike mens sneakers Sport",
//     "price": 137,
//     "imageUrl": "/img/sneakers/5.jpg"
//   },
//   {
//     "title": "Nike mens sneakers Nike Kyrie 7",
//     "price": 167,
//     "imageUrl": "/img/sneakers/6.jpg"
//   },
//   {
//     "title": "Nike mens sneaker X",
//     "price": 127,
//     "imageUrl": "/img/sneakers/7.jpg"
//   },
//   {
//     "title": "Nike mens sneakers leBro",
//     "price": 181,
//     "imageUrl": "/img/sneakers/8.jpg"
//   }
// ]

// fetch("https://60ed8027a78dc700178adf66.mockapi.io/items").then((res) => {
//   return res.json();
// }).then(json => {
//   setItems(json)
// })








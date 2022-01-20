import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
// import { Link } from 'react-router-dom';




function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([

  ])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch("https://60ed8027a78dc700178adf66.mockapi.io/items").then((res) => {
      return res.json();
    }).then(json => {
      setItems(json)
    })

  }, [])



  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} */}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40 ">
          <h1 >All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            items.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClickFavorite={() => console.log('Add something')}
                onClickPlus={() => console.log('Click plus')}
              />
            ))}


        </div>
      </div>
    </div >
  );
}

export default App;




//? {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}   
// ?{cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}

// ! эти обе строки работают взаимо заменяемо -  
//! во второй строке - (&&)  если  cartOpened являеться true, то код выполняет правую часть gjckt && если отрицательно то невыполняеться














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





// [

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























// function App() {

//   // const [count, setCount] = useState(0);
//   // const plus = () => {
//   //   setCount(count + 1)
//   // }
//   // const minus = () => {
//   //   setCount(count - 1)
//   // }



//   return (
//     <div className="wrapper clear">
//       {/* <center>
//         <h1>{count}</h1>
//         <button onClick={() => plus()}>+</button>
//         <button onClick={() => minus()}>-</button>
//       </center> */}


//       <div style={{ display: 'none' }} className="overlay">
//       </div>
//       <Drawer />
//       <Header />
//       <div className="content p-40">
//         <div className="d-flex align-center justify-between mb-40 ">
//           <h1 >All sneakers</h1>
//           <div className="search-block d-flex">
//             <img src="/img/search.svg" alt="Search" />
//             <input placeholder="Search..." />
//           </div>
//         </div>
//         <div className="d-flex">

//           {
//             array.map((obj) => (
//               <Card
//                 title={obj.title}
//                 price={obj.price}
//                 imageUrl={obj.imageUrl}
//                 onClickFavorite={() => console.log('Add something')}
//                 onClickPlus={() => console.log('Click plus')}
//               />
//             ))}


//         </div>
//       </div>
//     </div >
//   );
// }

// export default App;

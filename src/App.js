import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <header>

        <div className="headerLeft">
          <swg />

          <div className="headerInfo">
            <h3> React Sneakers </h3>
            <p>Shop of the best sneakers</p>
          </div>

          <ul>
            <li>
              <swg />
              <span>700 $</span>
            </li>
            <li>
              <swg />
            </li>
          </ul>
        </div>
      </header>

      <div className="content">
        <h1>All sneakers</h1>
        .............
        content
      </div>

    </div>
  );
}

export default App;

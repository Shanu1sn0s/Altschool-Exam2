import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Count = () => {
 
  const [counter, useCounter] = useState(0);

  const increment = () => {
    let increment = counter + 1;
    useCounter(increment);
  };
  const decrement = () => {
    let decrement = counter - 1;
    useCounter(decrement);
  };
  const reset = () => {
    useCounter(0);
  };

  const setValue = (value) => {
    useCounter(parseInt(value));
  };

  return (
    <div>
       <Helmet>
    <title>Counter</title>
    <meta name="description" content="Counter page " />
    <link rel="canonical" href="/counter" />
  </Helmet>;
      <div className="container">
        <Link to="/" className="link">
          Go back to Home page
        </Link>
        <div className="how-to">
          <h1>How to use the app</h1>
          <p>
            <ul>
              <li>input your desired figure</li>
              <li>Click "Enter"</li>
              <li>Increase or Decrease your count value</li>
            </ul>
          </p>
        </div>
        <div className="wrapper">
          <input
            type="number"
            placeholder="input value"
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                setValue(event.target.value);
              }
            }}
          />
          <h1>Count = {counter}</h1>

          <div className="btns">
            <button className="add" onClick={increment}>
              +
            </button>
            <button className="sub" onClick={decrement}>
              -
            </button>
            <button className="reset" onClick={reset}>
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;

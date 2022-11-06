import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async'

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <Helmet>
        <title>Use reducer</title>
        <meta name="description" content="Use reducer page" />
        <link rel="canonical" href="/use+reducer" />
      </Helmet>
      <div className="links">
        <Link to="/" className="link">
          Go back to Home page
        </Link>
      </div>
      <div>
        <h1 className = 'home'>useReducer</h1>
      </div>
      <div className="wrapper">
        <div className="count reducer">{count} </div>
        <div className="btns">
          <button className="add" onClick={() => dispatch('increment')}>
            +
          </button>
          <button className="sub" onClick={() => dispatch('decrement')}>
            -
          </button>
          <button className="reset" onClick={() => dispatch('reset')}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reducer;

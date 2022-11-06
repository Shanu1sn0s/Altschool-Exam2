import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Counter home page with access to 404page, error page, usereducer counter and custom counter page"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1 className = 'home'>COUNT WITH EASE</h1>
      <h2>Alschool Examination</h2>
      <hr />
      <h5>Created by : Shanu Olayinka</h5>
      <div className="links home">
        <div>
          <Link to="/404" className="link">
            404
          </Link>
        </div>
        <div>
          <Link to="/error+boundary" className="link">
            Error
          </Link>
        </div>
        <div>
          <Link to="/use+reducer" className="link">
            To useReducer
          </Link>
        </div>
        <div>
          <Link to="/counter" className="link">
            Custom Counter Page
          </Link>
        </div>
        <div className= 'box'>
          <span>
            <h3>BEGIN YOU COUNTING JOURNEY </h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;

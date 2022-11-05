import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return(
    <div className = 'container'>
        <h1>Home Page</h1>
       <h2>Alschool Examination</h2>
      <h5>Created by : Shanu Olayinka</h5>
      <div className = 'links home' >
        <div>
          <Link to="/404" className= 'link'>404</Link>
        </div>
        <div>
          <Link to="/error+boundary" className= 'link'>Error</Link>
        </div>
        <div>
          <Link to="/use+reducer" className= 'link'>To useReducer</Link>
        </div>
        <div>
          <Link to="/counter" className= 'link'>Custom Counter Page</Link>
        </div>
      </div>
     
    </div>
  )
}

export default Home;
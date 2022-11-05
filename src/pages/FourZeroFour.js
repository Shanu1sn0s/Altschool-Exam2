import React from 'react'
import {Link} from 'react-router-dom'


const ErrorPage = () =>{
  return(
    <div>
      <div className = 'links'> 
       <Link to= '/'  className='link'>Back</Link>
      </div>
      <h1 className = 'container wrapper four' >404 </h1>
      
    </div>
  )
}

export default ErrorPage
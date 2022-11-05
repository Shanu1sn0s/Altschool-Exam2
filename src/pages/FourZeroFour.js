import React from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet-async'


const ErrorPage = () =>{
  return(
    <div>
      <Helmet>
      <title>404</title>
      <meta name='description' content='404 page'/>
      <link rel='canonical' href='/404'/>
    </Helmet>
      <div className = 'links'> 
       <Link to= '/'  className='link'>Back</Link>
      </div>
      <h1 className = 'container wrapper four' >404 </h1>
      
    </div>
  )
}

export default ErrorPage
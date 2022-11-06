import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='not-found'>
        <h2>404</h2>
        <h2>Page Not Found</h2> 
        <Link to="/">Back to the homepage...</Link>
    </div>
  )
}

export default PageNotFound
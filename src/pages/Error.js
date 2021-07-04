import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

const Error = () => {
  return (
    <div className='error'>
      <h1> 404 - Page Not Found </h1>
      <Link to='/'>
        <button className='waves-effect waves-light btn center'>Home</button>
      </Link>
      <Contact />
    </div>
  )
}

export default Error

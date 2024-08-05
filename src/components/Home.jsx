import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Link to="/sign-in"> Click Here to Login</Link>   
        </div>
  )
}

export default Home
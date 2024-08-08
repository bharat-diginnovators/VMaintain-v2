import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className='flex justify-between items-center px-10 py-4'>
    <div>
        <p>Copyright ©2024 Diginnovators</p>
    </div>
    <div className='text-[#882EFD] flex justify-between items-center gap-8'>
        <div>
            <Link>Privacy Policy</Link>
        </div>
        <div>
        <Link>Terms of Conditions</Link>


        </div>
    </div>
  </footer>
  )
}

export default Footer
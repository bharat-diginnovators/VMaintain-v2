import React, { useState } from 'react'
import status from "../../assets/App.gif"

const Settings = () => {


  return (
  <section className='w-full h-full flex flex-col justify-center items-center relative'>
      <h1 className='text-6xl font-bold italic text-gray-400 absolute z-0 bottom-44'>Under Maintenance</h1>

      <img src={status} alt=''  className='z-10'/>

    
  </section>
  )
}

export default Settings
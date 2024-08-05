import React from 'react'

const Heading = ({ text, className }) => (
    <h1 className={`font-bold xs:text-[1.5rem] md:text-[1.7rem] lg:text-[2rem] ${className}`}>{text}</h1>
  );

export default Heading
import React from 'react'
import Checkbox from '../../../Core/Checkbox'

const Columns = () => {
  
    const columns = ["State","Site","Site URL","Updates","Plugins","Themes","Last Sync","Site Health","Status Code","Connected","Client","Tag"]

  return (
    <div className='w-[160px] relative flex flex-col gap-[1px] z-50 bg-white p-[1px] rounded-sm text-sm'>
    {columns.map((item,i)=>( <div key={i} className='flex gap-2 px-4 py-2 bg-[#F4EBFF] justify-start items-center'>
        <div><Checkbox checked={true}/></div>
        <div>{item}</div>
       </div>))}
       
    </div>
  )
}

export default Columns
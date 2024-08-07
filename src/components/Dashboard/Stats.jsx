import React from 'react'
import stats1 from "../../assets/Icons/starts1.svg"
import stats2 from "../../assets/Icons/starts2.svg"
import stats3 from "../../assets/Icons/starts3.svg"
import stats4 from "../../assets/Icons/starts4.svg"

import loss from "../../assets/Icons/Loss.svg"
import profit from "../../assets/Icons/Growth.svg"
const Stats = () => {

    const data = [
        {
          count: "197",
          percentage: '100%',
          isProfit: true,
          description: 'Total Websites',
          icon: stats2,
        },
        {
          count: "3/197",
          percentage: '1.5%',
          isProfit: false,
          description: 'Active Sites',
          icon: stats4,
        },
        {
          count: "23",
          percentage: '11.68%',
          isProfit: true,
          description: 'Available Updates',
          icon: stats1,
        },
        {
          count: "07",
          percentage: '3.75%',
          isProfit: true,
          description: 'Sites health',
          icon: stats3,
        },
      ];






  return (
    <div className=''>

<div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {data.map((item, index) => (
        <div key={index} className=" m-1 rounded-sm flex justify-around items-center px-2  shadow-[0px_0px_3px_rgb(0,0,0,0.2)] min-h-[7rem] lg:min-w-[10rem] xl:w-full ">
          <div className='min-w-12 min-h-12  xl:w-15 xl:h-15'>
            <img src={item.icon} alt="stats" className='w-full' />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center gap-6">
              <div className="xs:text-[2rem] lg:text-[1.5rem] xl:text-[2rem] font-bold">
                <h1>{item.count}</h1>
              </div>
              <div className={`flex justify-center items-center flex-wrap gap-1 ${item.isProfit ? 'text-[#00B656]' : 'text-[#FF0000]'}`}>
                <img src={item.isProfit ? profit : loss} alt={item.isProfit ? 'profit' : 'loss'} className="w-4 h-4" />
                <h3 className="text-sm">{item.percentage}</h3>
              </div>
            </div>
            <h2 className="xs:text-[1rem] lg:[.7rem] xl:[1rem]">{item.description}</h2>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Stats
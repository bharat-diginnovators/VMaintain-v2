import React from 'react';
import menu from "../../assets/Icons/menudots.svg"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Responses', value: 276 },
  { name: 'Non Responses', value: 124 },
];

const COLORS = ['#882EFD', '#E6E8EA']; 

const PieChartComponent = () => (
  <div className="p-4 border rounded-lg shadow-sm">
    <div className='flex justify-between'>
      <div>
      <h2 className="font-medium mb-2">Response Rate</h2>
      <p className="mb-4">Dummy Text</p>
      </div>
      <div>
       <button>
        <img src={menu} alt='' />
       </button>
      </div>
    </div>
   
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={72}
          fill="#8884d8"
          dataKey="value"
          startAngle={180}
          endAngle={600}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold"
        >
          69%
        </text>
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-base"
        >
          Response Rate
        </text>
      </PieChart>
    </ResponsiveContainer>
    <div className='flex justify-between items-center'>
    <div className="flex flex-col justify-between gap-2  text-sm">
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#882EFD] rounded-full inline-block mr-1"></span>
        <span>Responses: 276 (69%)</span>
      </div>
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#E6E8EA] rounded-full inline-block mr-1"></span>
        <span>Non Responses: 124 (31%)</span>
      </div>
    </div>
    <div className="text-sm space-y-2">
      <p>Total Sent: 400</p>  <p>Comments: 240</p>
    </div>

    </div>

    
  </div>
);

export default PieChartComponent;

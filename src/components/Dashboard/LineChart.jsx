import React,{useState} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '10 Jun', Dummy1: 1500, Dummy2: 1000 },
  { name: '11 Jun', Dummy1: 500, Dummy2: 700 },
  { name: '12 Jun', Dummy1: 1500, Dummy2: 800 },
  { name: '13 Jun', Dummy1: 2000, Dummy2: 1500 },
  { name: '14 Jun', Dummy1: 2100, Dummy2: 1200 },
  { name: '15 Jun', Dummy1: 2200, Dummy2: 1000 },
  { name: '16 Jun', Dummy1: 2300, Dummy2: 700 },
  { name: '17 Jun', Dummy1: 2500, Dummy2: 400 },
];

const LineChartComponent = () => {
    const [selectedWeek, setSelectedWeek] = useState('This week');
  
    return (
      <div className="p-4 border rounded-lg shadow-sm overflow-x-auto">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-medium">Analytics</h2>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#882EFD] rounded-full inline-block"></span>
              <span className=''>Dummy 1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#EA4242] rounded-full inline-block"></span>
              <span>Dummy 2</span>
            </div>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className=" rounded px-5 bg-[#F7F7F8] border-[.5px] border-[#e4e4e4] focus:border-none focus:outline-none"
            >
              <option value="This week">This week</option>
              <option value="Last week">Last week</option>
              <option value="Last month">Last month</option>
            </select>
          </div>
        </div>
        <p className="mb-4">Analytics Information</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis padding={{ top: 20 }} />
            <Tooltip />
            <Line type="monotone" dataKey="Dummy1" stroke="#882efd96" dot={{ fill:"#882EFD" }} />
            <Line type="monotone" dataKey="Dummy2" stroke="#ea4242a8" dot={{ fill:"#EA4242" }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="text-center mt-2 text-[#882EFD]">Week</div>
      </div>
    );
  };
  
  export default LineChartComponent;
import React from 'react'
import Checkbox from '../../../Core/Checkbox'

const Columns = ({ visibleColumns, setVisibleColumns, totalColumns }) => {
 

  const handleCheckboxChange = (column) => {
    setVisibleColumns((prev) =>
      prev.includes(column)
        ? prev.filter((col) => col !== column)
        : [...prev, column]
    );
  };

  return (
    <div className='w-[160px] relative flex flex-col gap-[1px] z-50 bg-white p-[1px] rounded-sm text-sm'>
      {totalColumns.map((item, i) => (
        <div key={i} className='flex gap-2 px-4 py-2 bg-[#F4EBFF] justify-start items-center'>
          <Checkbox
            checked={visibleColumns.includes(item)}
            onChange={() => handleCheckboxChange(item)}
          />
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
};

export default Columns;

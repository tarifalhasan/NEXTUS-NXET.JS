import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="relative">
      <button className="text-sm uppercase text-[#44414C] rotate-5 z-10 font-medium font-IBM bg-white px-4 py-2">
        Unlock
      </button>
      <div className="absolute top-[50%] left-[7%]">
        <div className="relative">
          <button className="text-sm  z-20 uppercase text-white rotate-5 font-medium font-IBM bg-skin-pink px-4 py-2">
            Passive Income
          </button>

          <span className="w-8 block absolute left-full top-[-64%] h-8 border-2  border-[#99FFFF]"></span>
          <span className="w-4 block absolute opacity-40 left-[126%] top-[-55%] h-4 border-2  border-[#EF4AF0]"></span>
          <span className="w-5 block absolute left-full top-[-44%] h-5 border-2  border-[#99FFFF]"></span>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;

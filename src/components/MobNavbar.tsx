import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoMenuOutline } from 'react-icons/io5';
import { AiOutlineHome, AiOutlineAppstore } from 'react-icons/ai';

const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-1/2 transform -translate-x-1/2 max-w-[500px] px-8 mob_navbar shadow-lg">
      <div className="flex justify-between items-center text-[28px] py-2 relative">
        {/* Menu Icon */}
        <IoMenuOutline />

        {/* Shopping Bag Icon with Badge */}
        <div className="relative">
          <HiOutlineShoppingBag />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center transform translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        {/* Home Icon */}
        <AiOutlineHome />

        {/* Heart Icon with Badge */}
        <div className="relative">
          <FiHeart />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center transform translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        {/* Appstore Icon */}
        <AiOutlineAppstore />
      </div>
    </div>
  );
};

export default MobNavbar;

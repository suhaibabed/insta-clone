import React, { FC } from 'react';
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

const Header: FC = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-x-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative items-center hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="object-contain"
          />
        </div>
        <div className="relative mt-6 p-3  w-16 h-10 lg:hidden flex-shrink-0 items-center cursor-pointer">
          <img
            src="/images/instagram.png"
            alt="Instagram"
            className="object-contain "
          />
        </div>

        {/* Middel - search input filed */}
        <div className="max-w-xm">
          <div className="relative mt-5 p-3 rounded-md">
            <div className="absolute inset-y-0  pl-2 flex  items-center pointer-event-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10  items-center sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center mt-4 mb-4   justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div
              className="absolute -top-1 -right-0 text-xs w-5 h-5 bg-red-500 
            rounded-full items-center 
            justify-center animate-pulse text-white"
            >
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="/images/sohib.jpg"
            alt="Instagram"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import { FiMenu, FiHome, FiBell, FiSearch } from 'react-icons/fi';

interface HeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen }) => {
  return (
    <header className="z-20 py-4 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <div className="flex items-center">
          <button
            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
          <div className="flex items-center">
            <FiHome className="w-5 h-5 text-gray-500" />
            <span className="mx-2 text-sm font-medium text-gray-800">/</span>
            <span className="text-sm font-medium text-gray-800">Dashboard</span>
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="flex">
            <button className="rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Search">
              <FiSearch className="w-5 h-5" />
            </button>
          </li>
          <li className="flex">
            <button className="rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Notifications">
              <FiBell className="w-5 h-5" />
            </button>
          </li>
          <li className="flex">
            <button className="rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Profile">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt="Profile picture"
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
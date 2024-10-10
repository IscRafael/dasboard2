import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { FiHome, FiBarChart2, FiBox, FiCalendar, FiLayers, FiList, FiUserCheck, FiMail, FiSettings, FiMessageSquare, FiUsers, FiX } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`z-30 w-64 overflow-y-auto bg-white md:block flex-shrink-0 ${isOpen ? 'fixed inset-y-0 left-0' : 'hidden'} md:static md:block transition-all duration-300`}>
      <div className="py-4 text-gray-500">
        <div className="flex items-center justify-between px-6">
          <Link to="/" className="text-lg font-bold text-gray-800">
            Lead
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-3 px-6 py-2 bg-gray-100">
          <p className="text-sm font-semibold">Walmart</p>
          <p className="text-xs">Los Angeles, California</p>
        </div>
        <ul className="mt-6">
          <MenuItem icon={<FiHome className="w-5 h-5" />} title="Dashboard" to="/" />
          <MenuItem icon={<FiBarChart2 className="w-5 h-5" />} title="Analytics" to="/analytics" />
          <MenuItem 
            icon={<FiBox className="w-5 h-5" />} 
            title="Widgets" 
            subItems={[
              { title: 'Widget 1', href: '/widgets/1' },
              { title: 'Widget 2', href: '/widgets/2' },
            ]}
          />
          <MenuItem icon={<FiCalendar className="w-5 h-5" />} title="Calendar" to="/calendar" />
          <MenuItem 
            icon={<FiLayers className="w-5 h-5" />} 
            title="Components" 
            subItems={[
              { title: 'Component 1', href: '/components/1' },
              { title: 'Component 2', href: '/components/2' },
            ]}
          />
          <MenuItem 
            icon={<FiList className="w-5 h-5" />} 
            title="Articulos" 
            subItems={[
              { title: 'Products', href: '/articulos/products' },
              { title: 'Category', href: '/articulos/category' },
            ]}
          />
          <MenuItem icon={<FiUserCheck className="w-5 h-5" />} title="Invoices" to="/invoices" />
          <MenuItem icon={<FiMail className="w-5 h-5" />} title="Tables" to="/tables" />
          <MenuItem icon={<FiMessageSquare className="w-5 h-5" />} title="Events" to="/events" />
          <MenuItem icon={<FiUsers className="w-5 h-5" />} title="Subscribers" to="/subscribers" />
          <MenuItem icon={<FiMail className="w-5 h-5" />} title="Contacts" to="/contacts" />
          <MenuItem icon={<FiSettings className="w-5 h-5" />} title="Settings" to="/settings" />
          <MenuItem icon={<FiUsers className="w-5 h-5" />} title="Profile" to="/profile" />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
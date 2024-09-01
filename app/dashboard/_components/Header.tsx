import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Email from '../emailFetch';

function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false); // Close the dropdown when a link is clicked
  };

  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-slate-50'>
      {/* Hamburger Menu Button for Small Screens */}
      <div className='lg:hidden relative'>
        <Button onClick={handleToggleDropdown} className='p-2'>
          <Menu className="h-6 w-6" />
        </Button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className='absolute left-0  mt-2 w-48 bg-white border rounded-md shadow-lg z-10'>
            <ul className='p-2'>
              <li>
                <a href="/dashboard" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={handleLinkClick}>Dashboard</a>
              </li>
              <li>
                <a href="/dashboard/history" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={handleLinkClick}>History</a>
              </li>
              <li>
                <a href="/dashboard/settings" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={handleLinkClick}>Settings</a>
              </li>
              <li>
                <a href="/" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={handleLinkClick}>Home</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* <div className='lg:hidden flex justify-center'> */}
          {/* <h1 className=' text-lg font-semibold text-emerald-900 '>IdeaFlow AI</h1> */}
      {/* </div> */}
      {/* Search Input - Hidden on small screens */}
      <div className='hidden lg:flex gap-2 items-center p-2 border rounded-md max-w-sm bg-white flex-grow'>
        <Search />
        <input 
          type='text' 
          placeholder='Search'
          className='outline-none flex-grow'
        />
      </div>

      {/* User Info and Email */}
      <div className='flex gap-5 items-center'>
        <h2 className='bg-slate-200 p-1 rounded-md text-xs text-slate-900 px-3 flex gap-2 items-center'>
          <Email />
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;

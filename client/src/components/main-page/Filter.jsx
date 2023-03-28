import React from 'react';
import { Menu, Transition } from '@headlessui/react';

import ToggleSwitchDropdownElement from '../common/dropdown-menu/ToggleSwitchDropdownElement.jsx';


const Filter = ({ categoriesData }) => {
  return (
    <div className="main-sidebar flex z-10">
      <Menu as="div" className="relative inline-block text-left dark:bg-dark-bg-800 z-10">
        <Menu.Button className="flex items-center w-full py-2 px-3 rounded-lg text-sm font-medium text-gray-700 bg-blue-600 dark:bg-dark-bg-800">
          <svg className="text-gray-200 dark:text-gray-300" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 14.6452V9.33875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6.30645V1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14.6452V7.82263" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 4.79032V1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 14.6452V10.8549" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 7.82258V1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 9.33875H7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 4.79028H15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 10.8549H23" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="pl-2 text-gray-200">Cities</span>
        </Menu.Button>

        <Transition as={React.Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="dark:bg-dark-800 absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <div className="group flex text-left relative h-10 w-full items-center overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800 dark:text-dark-text-400">
                <span className="px-7 relative text-black dark:text-dark-text-400">Hyi</span>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Filter;

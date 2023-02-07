import React from "react";

import DropdownElement from "./DropdownElement.jsx";

import clientRoutes from '../../../routes/client/clientRoutes.js';

const UserDropdownMenu = ({ userDetails }) => {
  return (
    <div>
      <button id="dropdownAvatarNameButton" data-dropdown-toggle={userDetails.id} className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
        <span className="sr-only">Open user menu</span>
        <img className="mr-2 w-8 h-8 rounded-full" src="/avatar.png" alt="user photo" />
        <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>

      {/* Dropdown menu */}
      <div id={userDetails.id} className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-7 text-sm text-gray-900 dark:text-white">
          <div className="absolute  inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <div className="font-medium ">{userDetails.fullname}</div>
        </div>
        <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
          <DropdownElement name='Profile' path={clientRoutes.fullProfilePagePath()} />
          <DropdownElement name='My tickets' path={clientRoutes.fullUserTicketsPagePath('1234')} />
          <DropdownElement name='Logout' path={clientRoutes.fullUserTicketsPagePath('1234')} />
        </ul>
      </div>
    </div>
  );
}

export default UserDropdownMenu;

import React from "react";
import { useTranslation } from 'react-i18next';

import LanguageSelectElement from "./LanguageSelectElement.jsx";

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';


const LanguageSelectMenu = () => {
  const [ t, i18n ] = useTranslation('header');

  // return (
  //   <div>
  //     <button id="dropdownAvatarNameButton" data-dropdown-toggle="language-change" className="flex items-center w-10 text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 dark:text-white" type="button">
  //       <span className="sr-only">Open language menu</span>
  //       <p>{ i18n.resolvedLanguage }</p>
  //       <svg className="w-3 h-3 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  //     </button>

  //     <div id="language-change" className="hidden w-12 z-10 bg-white rounded divide-y divide-gray-300 shadow dark:bg-gray-700 dark:divide-gray-600">
  //       <ul className="p-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
  //         
  //         
  //         
  //       </ul>
  //     </div>
  //   </div>
  // );
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className='mr-2'>
        <Menu.Button className="flex items-center w-10 text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 dark:text-white">
          {i18n.resolvedLanguage }
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-5 ml-2 -mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-12 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black 
        ring-opacity-5 focus:outline-none">
          <div className="py-2">
            
            <Menu.Item>
              <LanguageSelectElement  i18n={i18n} lng="en" />
            </Menu.Item>

            <Menu.Item>
              <LanguageSelectElement i18n={i18n} lng="ru" />
            </Menu.Item>

            <Menu.Item>
              <LanguageSelectElement i18n={i18n} lng="ua" />
            </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default LanguageSelectMenu;

import React from "react";
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import LanguageSelectElement from "./LanguageSelectElement.jsx";


const LanguageSelectMenu = () => {
  const [ t, i18n ] = useTranslation('header');


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className='mr-2'>
        <Menu.Button className="flex items-center w-10 text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 dark:text-white">
          {i18n.resolvedLanguage }
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Menu.Button>
      </div>

      <Transition as={React.Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 w-12 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

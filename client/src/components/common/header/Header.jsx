import React from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './Navbar.jsx';
import AuthButton from './AuthButton.jsx';
import UserDropdownMenu from './UserDropdownMenu.jsx';
import LanguageSelectMenu from './LanguageSelectMenu.jsx';

import clientRoutes from '../../../routes/client/clientRoutes.js';
import '../../css/header.css';


const lngs = {
  en: { nativeName: 'en' },
  ru: { nativeName: 'ru' },
  ua: { nativeName: 'ua' },
};

const Header = () => {
  const [ t, i18n ] = useTranslation('header');
  
  const tempUserDetails = {
    id: "temp_user_id",
    fullname: "USER NAME", 
    login: "login", 
    email: "email@email.com", 
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href={clientRoutes.mainPagePath()} className="flex items-center">
            <img src="/logo.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">UEvent</span>
          </a>

          <Navbar />
          <div className="flex items-center lg:order-2">
            {
              // check whether user is logged in
              localStorage.getItem("token")
              ?
              <div className="flex items-center">
                <LanguageSelectMenu />
                <UserDropdownMenu userDetails={tempUserDetails}/>
              </div>
              :
              <div className="authButtons">
                <div className="container-left-button">
                  <AuthButton name="Sign in" path={clientRoutes.loginPagePath()} type="login" />
                </div>
                <div className="container-right-button">
                  <AuthButton name="Sign up" path={clientRoutes.registerPagePath()} type="register" />
                </div>
              </div>
            }

            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

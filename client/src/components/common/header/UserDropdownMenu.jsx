import React from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import DropdownElement from "./DropdownElement.jsx";
import DarkModeSwitch from "./DarkModeSwitch.jsx";

import clientRoutes from '../../../routes/client/clientRoutes.js';
import adminRoutes from "../../../routes/client/adminRoutes.js";


const UserDropdownMenu = ({ userDetails }) => {
  const [ t, i18n ] = useTranslation('header');
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);

  const logoutButtonHandle = async () => {
    try {
      // const JWTToken = localStorage.getItem("token")
      // const instansAxios = axios.create();
      // instansAxios.defaults.headers['Authorization'] = 'Bearer ' + JWTToken;
      // await instansAxios.post(apiClientRouter.logoutPath());
      localStorage.removeItem('token');
      location.href = '/';
    } catch(err) {
      console.log(err);
      navigate('/*');
    }
  }
  
  return (
    <div>
      <button id="dropdownAvatarNameButton" onClick={() => setShow(!show)} data-dropdown-toggle={userDetails.id} className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
        <span className="sr-only">Open user menu</span>
        <img className="mr-2 w-8 h-8 rounded-full" src="/avatar.png" alt="user photo" />
        <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>

      <div id={userDetails.id} onFocus={() => setShow(true)} className={`${show ? '' : 'hidden'} absolute right-0 z-10 w-56 bg-white rounded divide-y divide-gray-300 shadow dark:bg-gray-700 dark:divide-gray-600`}>
        <div className="py-3 px-7 text-sm text-gray-900 dark:text-white">
          <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <div className="font-medium ">{t('userDropdownMenu.welcome')}{userDetails.fullname}</div>
        </div>
        <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
          <DropdownElement name={t('userDropdownMenu.profile')} path={clientRoutes.profilePagePath()} />
          <DropdownElement name={t('userDropdownMenu.eventCreate')} path={adminRoutes.eventsPagePath()} />
          <li><DarkModeSwitch /></li>
          <li>
            <button onClick={logoutButtonHandle} className="group text-left relative h-10 w-56 overflow-hidden bg-white text-lg shadow">
              <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="px-7 relative text-black group-hover:text-white">{t('userDropdownMenu.logout')}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropdownMenu;

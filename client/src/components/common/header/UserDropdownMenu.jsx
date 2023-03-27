import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import DarkModeSwitch from './DarkModeSwitch.jsx';

import clientRoutes from '../../../routes/client/clientRoutes.js';
import apiClientRoutes from '../../../routes/api/apiClientRoutes.js';
import UserContext from '../../../context/UserContext.js';

import defaultAvarat from '../../../temp/avatar.png';


export default () => {
  const [t, i18n] = useTranslation('header');
  const navigate = useNavigate();

  const { currentUser } = React.useContext(UserContext);

  const fullName = `${t('userDropdownMenu.welcome')} ${!currentUser?.name ? currentUser.login : currentUser.name}`
  const logoutButtonHandle = async (e) => {
    e.preventDefault();
    try {
      // const JWTToken = localStorage.getItem("token")
      // const instansAxios = axios.create();
      // instansAxios.defaults.headers['Authorization'] = 'Bearer ' + JWTToken;
      // await instansAxios.post(apiClientRouter.logoutPath());
      localStorage.removeItem('token');
      location.href = '/';
    } catch (err) {
      console.log(err);
      navigate('/*');
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left dark:bg-dark-bg-800 z-10">
      <div>
        <Menu.Button className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-dark-bg-800">
          <img className="mr-2 w-8 h-8 rounded-full" src={currentUser['picture'] ? apiClientRoutes.getPathAvatar(currentUser['picture']) : defaultAvarat} alt="user photo" />
          <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" color='white' viewBox="0 0 24 24" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Menu.Button>
      </div>

      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="dark:bg-dark-800 absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            <Menu.Item>
              <div className="group flex text-left relative h-10 w-full items-center overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800 dark:text-dark-text-400">
                <span className="px-7 relative text-black dark:text-dark-text-400">{fullName}</span>
              </div>
            </Menu.Item>

            <Menu.Item>
              <button onClick={() => location.href = clientRoutes.profilePagePath()} className="group flex text-left relative h-10 w-full items-center overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800 dark:text-dark-text-400">
                <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="px-7 relative text-black group-hover:text-white dark:text-dark-text-400">{ t('userDropdownMenu.profile') }</span>
              </button>
            </Menu.Item>

            <Menu.Item>
              <DarkModeSwitch />
            </Menu.Item>

            <form onSubmit={logoutButtonHandle}>
              <Menu.Item>
                {({ active }) => (
                  <button className="group text-left relative h-10 w-56 overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800">
                    <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="px-7 relative text-black group-hover:text-white dark:text-dark-text-400">{ t('userDropdownMenu.logout') }</span>
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

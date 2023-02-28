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
    <header className='header-div'>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          <a href={clientRoutes.mainPagePath()} className="flex items-center">
           <div className=''>
              <div className='logo-div'>
                <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="dark:fill-white" d="M8.63077 14.8549C8.82584 14.8549 9.01902 14.8165 9.19926 14.7418C9.37949 14.6672 9.54324 14.5578 9.68119 14.4198C9.81914 14.2819 9.92858 14.1182 10.0032 13.9379C10.0779 13.7577 10.1163 13.5645 10.1163 13.3695C10.1163 10.6116 11.2119 7.9667 13.162 6.0166C15.112 4.0665 17.757 2.97094 20.5148 2.97094C23.2727 2.97094 25.9176 4.0665 27.8677 6.0166C29.8178 7.9667 30.9134 10.6116 30.9134 13.3695C30.9172 13.7609 31.0754 14.1349 31.3537 14.4103C31.6317 14.6857 32.0074 14.8402 32.3989 14.8402C32.7903 14.8402 33.1659 14.6857 33.444 14.4103C33.7222 14.1349 33.8804 13.7609 33.8843 13.3695C33.8843 11.6138 33.5385 9.87525 32.8666 8.25319C32.1947 6.63113 31.21 5.15729 29.9685 3.91582C28.7269 2.67435 27.2531 1.68956 25.6311 1.01769C24.009 0.345811 22.2706 0 20.5148 0C18.7591 0 17.0207 0.345811 15.3985 1.01769C13.7765 1.68956 12.3027 2.67435 11.0612 3.91582C9.81972 5.15729 8.83494 6.63113 8.16305 8.25319C7.49118 9.87525 7.14537 11.6138 7.14537 13.3695C7.14537 13.7634 7.30187 14.1412 7.58043 14.4198C7.859 14.6984 8.23682 14.8549 8.63077 14.8549Z" fill="#1A1E2C" />
                  <path className="dark:fill-white" d="M39.5293 17.8258H26.452C27.4202 16.5421 27.9432 14.9775 27.9415 13.3695C27.9415 11.3996 27.1589 9.51035 25.7661 8.11742C24.3731 6.72449 22.4838 5.94196 20.5139 5.94196C18.5442 5.94196 16.655 6.72449 15.262 8.11742C13.869 9.51035 13.0865 11.3996 13.0865 13.3695C13.0865 13.7635 13.243 14.1413 13.5216 14.4199C13.8002 14.6985 14.1781 14.855 14.5721 14.855C14.9661 14.855 15.344 14.6985 15.6225 14.4199C15.9011 14.1413 16.0576 13.7635 16.0576 13.3695C16.0576 12.488 16.3189 11.6264 16.8086 10.8935C17.2983 10.1606 17.9943 9.58942 18.8086 9.25209C19.6229 8.91477 20.519 8.8265 21.3834 8.99844C22.2479 9.17038 23.0421 9.59481 23.6652 10.218C24.2885 10.8413 24.713 11.6354 24.885 12.4998C25.0569 13.3643 24.9687 14.2604 24.6314 15.0746C24.294 15.889 23.7229 16.5851 22.99 17.0748C22.2571 17.5645 21.3955 17.8258 20.5141 17.8258H1.50039C1.30407 17.8239 1.1093 17.8608 0.927353 17.9347C0.745405 18.0084 0.579889 18.1175 0.440367 18.2556C0.300847 18.3938 0.190089 18.5581 0.114504 18.7393C0.0389171 18.9206 0 19.115 0 19.3113C0 19.5075 0.0389171 19.702 0.114504 19.8832C0.190089 20.0644 0.300847 20.2287 0.440367 20.367C0.579889 20.505 0.745405 20.6142 0.927353 20.6879C1.1093 20.7617 1.30407 20.7987 1.50039 20.7967H39.5293C39.9207 20.7929 40.2947 20.6346 40.5701 20.3564C40.8455 20.0784 41 19.7027 41 19.3113C41 18.9198 40.8455 18.5442 40.5701 18.2661C40.2947 17.9879 39.9207 17.8297 39.5293 17.8258Z" fill="#0346F2" />
                  <path className="dark:fill-white" d="M32.3692 23.942C32.1742 23.942 31.981 23.9803 31.8007 24.055C31.6205 24.1296 31.4568 24.239 31.3188 24.377C31.1809 24.5149 31.0714 24.6786 30.9968 24.8589C30.9221 25.0391 30.8837 25.2323 30.8837 25.4274C30.8837 28.1852 29.7881 30.8301 27.838 32.7802C25.888 34.7303 23.243 35.8259 20.4852 35.8259C17.7273 35.8259 15.0824 34.7303 13.1323 32.7802C11.1822 30.8301 10.0866 28.1852 10.0866 25.4274C10.0828 25.036 9.92455 24.6619 9.64634 24.3865C9.36827 24.1111 8.99262 23.9566 8.6011 23.9566C8.20973 23.9566 7.83408 24.1111 7.55601 24.3865C7.2778 24.6619 7.11956 25.036 7.11571 25.4274C7.11571 27.1831 7.46155 28.9216 8.13336 30.5436C8.80532 32.1657 9.79004 33.6395 11.0315 34.881C12.2731 36.1225 13.7469 37.1072 15.3689 37.7791C16.991 38.451 18.7294 38.7968 20.4852 38.7968C22.2409 38.7968 23.9793 38.451 25.6015 37.7791C27.2235 37.1072 28.6973 36.1225 29.9388 34.881C31.1803 33.6395 32.1651 32.1657 32.8369 30.5436C33.5088 28.9216 33.8546 27.1831 33.8546 25.4274C33.8546 25.0334 33.6981 24.6556 33.4196 24.377C33.141 24.0985 32.7632 23.942 32.3692 23.942Z" fill="#1A1E2C" />
                  <path className="dark:fill-white" d="M1.47071 20.971H14.548C13.5798 22.2547 13.0568 23.8193 13.0585 25.4274C13.0585 27.3973 13.8411 29.2865 15.2339 30.6794C16.6269 32.0723 18.5162 32.8549 20.4861 32.8549C22.4558 32.8549 24.345 32.0723 25.738 30.6794C27.131 29.2865 27.9135 27.3973 27.9135 25.4274C27.9135 25.0334 27.757 24.6555 27.4784 24.3769C27.1998 24.0983 26.8219 23.9418 26.4279 23.9418C26.0339 23.9418 25.656 24.0983 25.3775 24.3769C25.0989 24.6555 24.9424 25.0334 24.9424 25.4274C24.9424 26.3088 24.6811 27.1704 24.1914 27.9033C23.7017 28.6362 23.0057 29.2074 22.1914 29.5447C21.3771 29.882 20.481 29.9703 19.6166 29.7984C18.7521 29.6264 17.9579 29.202 17.3348 28.5788C16.7115 27.9555 16.287 27.1615 16.115 26.297C15.9431 25.4325 16.0313 24.5364 16.3686 23.7222C16.706 22.9078 17.2771 22.2117 18.01 21.722C18.7429 21.2323 19.6045 20.971 20.4859 20.971H39.4996C39.6959 20.9729 39.8907 20.936 40.0726 20.8622C40.2546 20.7885 40.4201 20.6793 40.5596 20.5412C40.6992 20.403 40.8099 20.2387 40.8855 20.0575C40.9611 19.8762 41 19.6818 41 19.4855C41 19.2893 40.9611 19.0948 40.8855 18.9136C40.8099 18.7324 40.6992 18.5681 40.5596 18.4299C40.4201 18.2918 40.2546 18.1826 40.0726 18.1089C39.8907 18.0351 39.6959 17.9981 39.4996 18.0001H1.47071C1.07935 18.0039 0.705326 18.1622 0.429928 18.4404C0.15453 18.7184 0 19.0941 0 19.4855C0 19.877 0.15453 20.2526 0.429928 20.5307C0.705326 20.8089 1.07935 20.9672 1.47071 20.971Z" fill="#0346F2" />
                </svg>
              </div>
              {/* <div className='logo-div-text'>
                <span className="text-logo self-center text-xl font-semibold whitespace-nowrap dark:text-white">UEvent</span>
              </div> */}
            </div>
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

            {/* я тут играюсь , потом вынесу в отдельный файл  */}
            <div className=" dark:bg-gray-900  items-center">
              <div className="flex flex-row justify-between toggle">
                  <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
                      <div className="relative">
                      <input type="checkbox" name="dark-mode" id="dark-toggle" className="checkbox hidden"/>
                      <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"></div>
                      </div>
                      <div className="ml-3 dark:text-white text-gray-900 font-medium">
                      Dark Mode
                      </div>
                  </label>
                </div>
            </div>
            {/* навреное... */}

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

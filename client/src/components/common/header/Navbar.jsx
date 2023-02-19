import React from "react";
import { useTranslation } from 'react-i18next';

import NavbarElement from "./NavbarElement.jsx";

import clientRoutes from '../../../routes/client/clientRoutes.js';

const Navbar = () => {
  const [ t, i18n ] = useTranslation('header');

  return (
    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <NavbarElement name={t('navButtons.mainPage')} path={clientRoutes.mainPagePath()}/>
        <NavbarElement name={t('navButtons.partnerRegister')} path={clientRoutes.partnershipRegisterPagePath()}/>
        <NavbarElement name={t('navButtons.about')} path={clientRoutes.mainPagePath()}/>
        <NavbarElement name={t('navButtons.contact')} path={clientRoutes.mainPagePath()}/>
      </ul>
    </div>
  );
  
}

export default Navbar;

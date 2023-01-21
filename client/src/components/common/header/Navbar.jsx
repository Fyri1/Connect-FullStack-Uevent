import React from "react";

import NavbarElement from "./NavbarElement.jsx";

import clientRoutes from '../../../routes/client/clientRoutes.js';

const Navbar = () => {
  return (
    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <NavbarElement name='Home' path={clientRoutes.mainPagePath()}/>
        <NavbarElement name='Company' path={clientRoutes.mainPagePath()}/>
        <NavbarElement name='Marketplace' path={clientRoutes.mainPagePath()}/>
        <NavbarElement name='Team' path={clientRoutes.mainPagePath()}/>
        <NavbarElement name='Contact' path={clientRoutes.mainPagePath()}/>
      </ul>
    </div>
  );
  
}

export default Navbar;

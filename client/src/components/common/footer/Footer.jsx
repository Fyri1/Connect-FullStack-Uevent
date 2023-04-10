import React from "react";

import Logo from "../Logo.jsx";
import DevsSocials from "./DevsSocials.jsx";
import WebsiteSocials from "./WebsiteSocials.jsx";


const Footer = ({ i18n, lng }) => {
  return (
    <footer className="flex-[0_0_auto] bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-00 ">
      <div className="container md:px-6 md:py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <Logo />

          {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Udown</span>
          </a> */}

          <p className="mt-2 -ml-10 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        
        <DevsSocials />
      </div>

      <WebsiteSocials />
    </footer>
  );
}

export default Footer;

import React from "react";
import '../../flags/css/flag-icon.min.css'; 

const LanguageSelectElement = ({ i18n, lng }) => {
  return (
    <li>
      <button type="submit" key={lng}
        className={i18n.resolvedLanguage === lng ? 
          "inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition border-2 border-blue-700 rounded-full shadow ripple shadow-lg bg-blue-100 focus:outline-none" :
          "inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"}
        onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
        {lng}
      </button>
      <span className={`flag-icon flag-icon-${lng === 'en' ? 'us' : lng} flag-icon-squared`}></span>
    </li>
  );
}

export default LanguageSelectElement;

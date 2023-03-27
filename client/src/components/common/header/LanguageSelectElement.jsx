import React from "react";

import '../../flags/css/flag-icon.min.css'; 


const LanguageSelectElement = ({ i18n, lng }) => {
  return (
    <div>
      <button className=" relative group overflow-hidden px-6 h-12  border border-blue-300 rounded-full shadow ripple shadow-lg bg-blue-100 focus:outline-none">
        <div aria-hidden="true" className="transition duration-300 group-hover:-translate-y-12">
          <div className="h-12 flex items-center justify-center">
            <div className={`flag-icon flag-icon-${lng === 'en' ? 'us' : lng} flag-icon-squared`} />
          </div>

          <div className="h-12 flex items-center justify-center">
            <div onClick={() => i18n.changeLanguage(lng)} key={lng} className={i18n.resolvedLanguage === lng } disabled={i18n.resolvedLanguage === lng}> 
              {lng}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default LanguageSelectElement;

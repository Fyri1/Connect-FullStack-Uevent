import React from "react";
import '../../flags/css/flag-icon.min.css'; 

const LanguageSelectElement = ({ i18n, lng }) => {
  return (
    <div>
        <button className=" relative group overflow-hidden px-6 h-12  border border-blue-300 rounded-full shadow ripple shadow-lg bg-blue-100 focus:outline-none">
          <div aria-hidden="true" className="transition duration-300 group-hover:-translate-y-12">
          
              <div className="h-12 flex items-center justify-center">

                <div className={`flag-icon flag-icon-${lng === 'en' ? 'us' : lng} flag-icon-squared`}></div>

              </div>

              <div className="h-12 flex items-center justify-center">
                <div key={lng} className={i18n.resolvedLanguage === lng }
                  onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}> 
                  {lng}
                </div>
             
                
              </div>
          </div>
        </button>

      {/* <button type="submit" key={lng}
        className={i18n.resolvedLanguage === lng ? 
          "inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition border-2 border-blue-700 rounded-full shadow ripple shadow-lg bg-blue-100 focus:outline-none" :
          "inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"}
        onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
        {lng}
      </button> */}
      {/* То что ответчает за флаги */}
      {/* <span className={`flag-icon flag-icon-${lng === 'en' ? 'us' : lng} flag-icon-squared`}></span> */}
    </div>
  );
}

export default LanguageSelectElement;

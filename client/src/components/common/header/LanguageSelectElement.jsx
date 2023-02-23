import React from "react";


const LanguageSelectElement = ({ i18n, lng }) => {
  return (
    <li>
      <button type="submit" key={lng} className={i18n.resolvedLanguage === lng ? "mx-2 text-blue-800 underline underline-offset-1" : "mx-2 text-gray-400"} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
        {lng}
      </button>
    </li>
  );
}

export default LanguageSelectElement;

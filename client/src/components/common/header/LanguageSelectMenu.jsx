import React from "react";
import { useTranslation } from 'react-i18next';


const lngs = {
  en: { nativeName: 'en' },
  ru: { nativeName: 'ru' },
  ua: { nativeName: 'ua' },
};

const LanguageSelectMenu = () => {
  const [ t, i18n ] = useTranslation('header');

  return (
    <div>
      <button id="dropdownAvatarNameButton" data-dropdown-toggle="language-change" className="flex items-center w-10 text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
        <span className="sr-only">Open language menu</span>
        <p>{ i18n.resolvedLanguage }</p>
        <svg className="w-3 h-3 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>

      <div id="language-change" className="hidden w-10 z-10 bg-white rounded divide-y divide-gray-300 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
          <li>
            <button type="submit" key="en" className="mx-2 text-white text-orange-800" onClick={() => i18n.changeLanguage(lngs.en.nativeName)}>
              {lngs.en.nativeName}
            </button>
          </li>
          <li>
            <button type="submit" key="ru" className="mx-2 text-white text-orange-400 underline" onClick={() => i18n.changeLanguage(lngs.ru.nativeName)}>
              {lngs.ru.nativeName}
            </button>
          </li>
          <li>
            <button type="submit" key="ua" className="mx-2 text-white text-orange-400 underline" onClick={() => i18n.changeLanguage(lngs.ua.nativeName)}>
              {lngs.ua.nativeName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelectMenu;

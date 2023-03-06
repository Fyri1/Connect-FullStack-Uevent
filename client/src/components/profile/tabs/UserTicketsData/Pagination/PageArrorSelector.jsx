import React from 'react';


const PageArrorSelector = ({ children }) => {
  const arrowClickHandle = () => {
    console.log("pidoras nazal na arrow");
  }

  return (
    <li className="px-3">
      <button onClick={arrowClickHandle} className="block px-2 py-2 ml-0 shadow-lg shadow-blue-150 leading-tight text-gray-500  bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        { children }
      </button>
    </li>
  )
}

export default PageArrorSelector;

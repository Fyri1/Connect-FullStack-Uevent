import React from 'react';


const TabButton = ({ id, slideNumber, current, name }) => {
  return (
    <li className="mr-2" role="presentation">
      <button
        className="group inline-block p-4 rounded-t-lg border-b-2 hover:border-blue-400 focus:text-blue-700 focus:border-blue-700 focus:duration-700 focus:ease-in-out"
        aria-current={current}
        data-carousel-slide-to={slideNumber}
        id={id + "-tab"}
        type="button">
        { name }
        <div className="inset-0 h-1 w-0 bg-blue-600 transition-all duration-[250ms] ease-out group-focus:w-full"></div>
      </button>

      
    </li>
  )
}

export default TabButton;

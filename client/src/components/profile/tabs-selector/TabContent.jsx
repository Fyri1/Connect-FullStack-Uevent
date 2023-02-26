import React from 'react';


const TabContent = ({ id, active, children }) => {
  return active ? (
    <div className="hidden p-3 items-center justify-center w-full rounded-lg bg-gray-50 dark:bg-gray-800 duration-700 ease-in-out" id={id} data-carousel-item="active">
      { children }
    </div>
  ) : (
    <div className="hidden p-3 items-center justify-center w-full rounded-lg bg-gray-50 dark:bg-gray-800 duration-700 ease-in-out" id={id} data-carousel-item>
      { children }
    </div>
  )
}

export default TabContent;

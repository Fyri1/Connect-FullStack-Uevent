import React from 'react';


const TabContent = ({ id, children }) => {
  return (
    <div className="hidden p-3 items-center justify-center w-full rounded-lg bg-gray-50 dark:bg-gray-800" id={id} role="tabpanel" aria-labelledby={id + "-tab"}>
      { children }
    </div>
  )
}

export default TabContent;

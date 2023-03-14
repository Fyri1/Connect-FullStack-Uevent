import React from 'react';


const SocialNetworkIcon = ({ link, children }) => {
  return (
    <a href={link} className="hover:opacity-75">
      <svg aria-hidden="true" className="w-6 h-6 mx-2 text-gray-700 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        { children }
      </svg>
    </a>
  )
}

export default SocialNetworkIcon;

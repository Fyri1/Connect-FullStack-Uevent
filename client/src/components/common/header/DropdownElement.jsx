import React from "react";

const DropdownElement = ({ name, path }) => {
  return (
    <li>
      <a href={path} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{ name }</a>
    </li>
  );
}

export default DropdownElement;

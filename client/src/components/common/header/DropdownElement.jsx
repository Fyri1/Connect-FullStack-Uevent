import React from "react";

const DropdownElement = ({ name, path }) => {
  return (
    <li>
      <div className="button-profile">
        <a href={path} > 
          <button className="group text-left relative h-10 w-44 overflow-hidden bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="px-7 relative text-black group-hover:text-white">{ name }</span>
          </button>
        </a>
      </div>
    </li>
  );
}

export default DropdownElement;

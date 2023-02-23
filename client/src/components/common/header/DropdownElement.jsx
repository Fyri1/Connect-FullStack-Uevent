import React from "react";
import { useNavigate } from 'react-router-dom';

const DropdownElement = ({ name, path }) => {
  const navigate = useNavigate();

  return (
    <li>
      <div className="button-profile">
        <button onClick={() => { location.href = path; }} className="group text-left relative h-10 w-56 overflow-hidden bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="px-7 relative text-black group-hover:text-white">{ name }</span>
        </button>
      </div>
    </li>
  );
}

export default DropdownElement;

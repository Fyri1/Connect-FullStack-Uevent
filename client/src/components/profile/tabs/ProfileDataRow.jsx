import React from "react";


const ProfileDataRow = ({ id, name, value }) => {  
  return (
    <li className="flex border-y py-4">
      <div className="flex w-full">
        <span className="font-bold w-[35%]">{ name }</span>
        <span className="text-gray-700 w-[65%] pl-3">{ value }</span>
      </div>
    </li>
  );
}

export default ProfileDataRow;

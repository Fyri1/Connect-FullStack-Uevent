import React from 'react';

const InputField = ({ id, name, type, placeholder, userData, setUserData, children }) => {
  return (
    <div>
      <label htmlFor={type} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ name }</label>
      <div className='relative'>
        { children }
        <input onChange={(e) => {
          setUserData({
            ...userData,
            [id]: e.target.value,
          });
        }} type={type} name={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={ placeholder } />
      </div>
    </div>
  );
}

export default InputField;
import React from 'react';

const InputField = ({ id, name, type, placeholder, userData, setUserData, errors, setErrors, children }) => {
  const [errorMessageElement, setErrorMessageElement] = React.useState();
  const [inputColor, setInputColor] = React.useState("bg-gray-50 border-1 border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark: border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");

  React.useEffect(() => {
    if (errors[id]) {
      setErrorMessageElement(
        <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Oops!</span> {errors[id]}</p>
      )
      setInputColor("bg-gray-50 border-1 border-red-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark: border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");
    } else {
      setErrorMessageElement();
      setInputColor("bg-gray-50 border-1 border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark: border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");
    }
    
  }, [errors]);

  const inputChangeHandle = (e) => {
    setUserData({
      ...userData,
      [id]: e.target.value,
    });

    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: ''
      })
    }
  }

  return (
    <div>
      <label htmlFor={type} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ name }</label>
      <div className='relative'>
        { children }
        <input onChange={inputChangeHandle} type={type} name={type} id={id} className={inputColor} placeholder={ placeholder } />
      </div>
      { errorMessageElement }
    </div>
  );
}

export default InputField;
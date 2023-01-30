import React from 'react';

const InputField = ({ id, name, type, placeholder, data, setData, errors, setErrors, children }) => {
  const [errorMessageElement, setErrorMessageElement] = React.useState();
  const [inputColor, setInputColor] = React.useState('bg-gray-50 border-1 border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark: border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500');

  React.useEffect(() => {
    if (errors[id]) {
      setErrorMessageElement(
        <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
          <span className="font-medium">Oops!</span> {errors[id]}
        </p>
      );
      setInputColor('bg-gray-50 border-1 border-red-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark: border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500');
    } else {
      setErrorMessageElement();
      setInputColor('bg-gray-50 border-1 border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark: border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500');
    }
  }, [errors]);

  const inputChangeHandle = (e) => {
    e.preventDefault();

    setData({
      ...data,
      [id]: e.target.value,
    });

    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: '',
      });
    }
  };

  return (
    <div>
      <div className="relative z-0 w-full mb-6 group">
        {children}
        <input onChange={inputChangeHandle} type={type} name="floating_email" id={id} className="block py-2.5 px-7 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data[id]}/>
        <label htmlFor="floating_email" className="px-10 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6 peer-focus:-translate-x-8">{name}</label>
      </div>
      {errorMessageElement}
    </div>
  );
};

export default InputField;

import React from 'react';

import ErrorPopover from './ErrorPopover.jsx';


const InputField = ({ id, name, type, data, setData, errors, setErrors, children }) => {
  const [errorMessageElement, setErrorMessageElement] = React.useState();

  React.useEffect(() => {
    if (errors[id]) {
      setErrorMessageElement(<ErrorPopover id={"error-" + id} error={"Oops! " + errors[id]} />);
    } else {
      setErrorMessageElement();
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
      <div data-popover-target={"error-" + id} data-popover-placement="right" className="relative z-0 w-full mb-6 group">
        { children }
        <input onChange={inputChangeHandle} type={type} name="floating_email" id={id} className="block py-2.5 px-7 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data[id]}/>
        <label htmlFor="floating_email" className="px-10 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6 peer-focus:-translate-x-8">{name}</label>
      </div>
      { errorMessageElement }
    </div>
  );
};

export default InputField;

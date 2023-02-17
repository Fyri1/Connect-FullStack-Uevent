import React from "react";

import InputField from '../../common/form/InputField.jsx';


const ProfileDataRow = ({ id, name, value }) => {
  const [errors, setErrors] = React.useState({
    [id]: ""
  });
  const [submitData, setData] = React.useState({
    [id]: ""
  });

  const submitButtonHandle = () => {
    console.log("submit epta nado");
    setDisplayedElement (
      <div className="flex w-full">
        <span className="font-bold w-[35%]">{ name }</span>
        <span className="text-gray-700 w-[65%] pl-3">{ value }</span>
        <button onClick={ editButtonHandle } className="pl-3">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
        </button>
      </div>
    )
  };

  const editButtonHandle = () => {
    console.log("edit epta nado");
    setDisplayedElement (
      <div className="flex w-full">
        <span className="font-bold pt-2 w-[35%] pr-1">{ name }</span>
        <div className="w-[65%]">
          <InputField id={id} name={value} type="text" data={submitData} setData={setData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg className="w-5 h-3 text-gray-500 dark:text-gray-700" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </div>
          </InputField>
        </div>
        <button onClick={submitButtonHandle}>
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
        </button>
      </div>
    )
  };

  const [displayedElement, setDisplayedElement] = React.useState(
    <div className="flex w-full">
      <span className="font-bold w-[35%]">{ name }</span>
      <span className="text-gray-700 w-[65%] pl-3">{ value }</span>
      <button onClick={ editButtonHandle } className="pl-3">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
        </svg>
      </button>
    </div>
  );
  
  return (
    <li className="flex border-y py-4">
      { displayedElement }
    </li>
  );
}

export default ProfileDataRow;

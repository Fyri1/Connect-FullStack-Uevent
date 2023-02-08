import React from 'react';

import EditForm from '../../common/form/EditForm';
import InputField from '../../common/form/InputField.jsx';


const PassChangeTab = ({ userData }) => {
  // Probably to change to custom set of errors and data //
  const keys = Object.keys(userData);

  let temp = {};
  keys.forEach((key, i) => {
    temp[key] = "";
  });
  const [errors, setErrors] = React.useState(temp);
  const [data, setData] = React.useState(userData);
  // Probably to change to custom set of errors and data //

  return (
    <div>
      {/* <EditForm formMessage="Edit email"> */}
        <InputField id="password_old" name="Old password" type="text" data={data} setData={setData} errors={errors} setErrors={setErrors}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </InputField>

        <InputField id="password_new" name="New password" type="text" data={data} setData={setData} errors={errors} setErrors={setErrors}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </InputField>

        <InputField id="password_confirm" name="Confirm" type="text" data={data} setData={setData} errors={errors} setErrors={setErrors}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </InputField>
      {/* </EditForm> */}
    </div>
  )
}

export default PassChangeTab;

import React from 'react';

const EditForm = ({ formMessage, children }) => {
  return (
    <div className="w-full">
      <div className="w-full bg-transparent ">
        <div className="p-6 space-y-4">
          <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-dark-bg-800 dark:border-dark-bg-700">
            <div className="p-6 space-y-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">{ formMessage }</h1>
              <div className="space-y-4" >
                { children }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
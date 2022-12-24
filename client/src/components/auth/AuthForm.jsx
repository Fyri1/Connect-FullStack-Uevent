import React from 'react';

import clientRoutes from '../../routes/clientRoutes.js';

const AuthForm = ({ formMessage, children }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-transparent md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-10 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-1">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">{ formMessage }</h1>
              <form className="space-y-4 md:space-y-4" action="#">
                {children}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
import React from 'react';

const FormPay = (completeStep, setCompleteStep) => {
  return (
    <div className="animate-active-page">
      <div className="bg-white dark:bg-gray-900">
        <div className="flex">
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl text-center font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Get your free account now.
              </h1>

              <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPay;

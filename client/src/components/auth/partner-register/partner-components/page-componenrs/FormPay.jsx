import axios from 'axios';
import React from 'react';
import $api from '../../../../../../utils/api';
import apiClientRoutes from '../../../../../routes/api/apiClientRoutes';

const FormPay = ({completeStep, setCompleteStep}) => {
  const [key, setKey] = React.useState('');
  console.log(completeStep);

  const handeleForm = async (e) => {
    try {
      e.preventDefault();
      const response = await $api.post(apiClientRoutes.createOrganization(2), {
        secretKey: key,
      });
      console.log(response.data.values);
      setCompleteStep((prev) => ({
        ...prev,
        step2: {
          isComplete: true,
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="animate-active-page">
      <div className="bg-white dark:bg-gray-900">
        <div className="flex">
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl text-center font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Get your free account now.
              </h1>
              <form onSubmit={handeleForm}>
                <input
                  type="text"
                  onChange={(e) => setKey(e.target.value)}
                  value={key}
                />
                <button disabled={completeStep.step2.isComplete}>cocke</button>
              </form>
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

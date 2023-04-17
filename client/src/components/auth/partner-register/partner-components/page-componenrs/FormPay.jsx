import axios from 'axios';
import React from 'react';
import $api from '../../../../../../utils/api';
import apiClientRoutes from '../../../../../routes/api/apiClientRoutes';

const FormPay = ({ completeStep, setCompleteStep }) => {
  const [key, setKey] = React.useState('');

  const handeleForm = async (e) => {
    try {
      e.preventDefault();
      const response = await $api.post(apiClientRoutes.createOrganization(2), {
        secretKey: key,
      });
      console.log(response);
      setCompleteStep((prev) => ({
        ...prev,
        step2: {
          isComplete: true,
        },
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="animate-active-page ">
      <div class="bg-white relative flex flex-col justify-center overflow-hidden  py-12  dark:bg-gray-900 ">
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl dark:bg-gray-800" >
          <div class="mx-auto flex w-full max-w-md flex-col space-y-16 ">
            <div class="flex flex-col items-center justify-center text-center space-y-2 ">
              <div class="font-semibold text-3xl">
                <p> Get your free account now.</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                <p className="mt-4 text-center text-gray-500 dark:text-gray-400 ">
                  Let’s get you all set up so you can verify your personal
                  account and begin setting up your profile.
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handeleForm}>
                <div class="flex flex-col space-y-6 ">
                  <div class="  items-center justify-between ">
                    <input
                      type="text"
                      placeholder="Your Code"
                      onChange={(e) => setKey(e.target.value)}
                      disabled={completeStep.step2.isComplete}
                      class="flex  items-center        
                          justify-center w-full rounded-xl py-3   px-[14px]
                          text-body-color  border border-gray-400 outline-none ext-lg 
                          bg-white focus:bg-gray-50 focus:ring-1 ring-blue-70 
                          focus:border-primary"
                    />
                  </div>
                  <div class="flex flex-col space-y-5">
                    <div>
                      <button
                        disabled={completeStep.step2.isComplete}
                        class="flex flex-row items-center disabled:opacity-80
                       justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>

                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{' '}
                      <a
                        class="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPay;

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputField from '../common/form/InputField.jsx';
import EditForm from '../common/form/EditForm.jsx';

import clientRoutes from '../../routes/client/clientRoutes.js';
import apiRoutes from '../../routes/api/apiClientRoutes.js';

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState({
    login: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [errors, setErrors] = React.useState({
    login: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  React.useEffect(() => {
    // console.log(errors);
  }, [errors]);

  React.useEffect(() => {
    // console.log(userData);
  }, [userData]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiRoutes.registerPath(), userData);
      console.log(response);
      navigate(clientRoutes.mainPagePath());
    } catch (e) {
      console.log(e);
      setErrors({
        ...errors,
        ...e.response.userData.errors.errors.reduce((acc, i) => {
          return {
            ...acc,
            [i.param]: i.msg,
          };
        }, {}),
      });
    }
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <section className="bg-gray-50 dark:bg-gray-900">
        <EditForm formMessage="Create a new account">
          <InputField id="login" name="Your login" type="text" placeholder="my_login123" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="email" name="Email" type="email" placeholder="email@email.ru" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="password" name="Password" type="password" placeholder="••••••••" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="passwordConfirm" name="Password Confirm" type="password" placeholder="" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"></path>
              </svg>
            </div>
          </InputField>
          {/* <!-- Button Google --> */}
          <button type='button'
            class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full blue:bg-slate-800 dark:text-white'>
            <div class='m-auto'>
              <div class='flex items-center justify-start flex-1 space-x-4'>
                <svg width='25' height='25' viewBox='0 0 24 24'>
                  <path fill='currentColor'
                    d='M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z' />
                </svg>
                <span class='font-medium mb-[-2px]'>Continue with Google</span>
              </div>
            </div>
          </button>

          {/* <!-- Button Facebook --> */}
          <button type='button'
            class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
            <div class='m-auto'>
              <div class='flex items-center justify-start flex-1 space-x-4'>
                <svg width='25' height='25' viewBox='0 0 24 24'>
                  <path fill='currentColor'
                    d='M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z' />
                </svg>
                <span class='font-medium mb-[-2px]'>Continue with Facebook</span>
              </div>
            </div>
          </button>

          <button onClick={() => { console.log(userData) }} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Sign up
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <a href={clientRoutes.fullLoginPagePath()} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
          </p>
        </EditForm>
      </section>
    </form>
  );
};

export default Register;

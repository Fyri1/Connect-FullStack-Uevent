import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputField from '../common/form/InputField.jsx';
import EditForm from '../common/form/EditForm.jsx';

import clientRoutes from '../../routes/client/clientRoutes.js';
import apiRoutes from '../../routes/api/apiClientRoutes.js';

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState({
    login: '',
    password: '',
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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiRoutes.loginPath(), userData);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      navigate(clientRoutes.mainPagePath());
    } catch (e) {
      console.log(e);
      setErrors({
        ...errors,
        ...e.response.data.errors.errors.reduce((acc, i) => {
          return {
            ...acc,
            [i.param]: i.msg,
          };
        }, {}),
      });
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <section className="bg-gray-50 dark:bg-gray-900">
        <EditForm formMessage="Sign in">
          <InputField id="login" name="Your login" type="text" placeholder="my_login123" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="login" name="Your login" type="text" placeholder="my_login123" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd"  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"></path>
              </svg>
            </div>
          </InputField>

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
              </div>
            </div>
            <a href={clientRoutes.fullPassResetPagePath()} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
          </div>

          <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account yet?{' '}
            <a href={clientRoutes.fullRegisterPagePath()} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
          </p>
        </EditForm>
      </section>
    </form>
  );
};

export default Login;
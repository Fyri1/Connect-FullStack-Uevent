import React from "react";

import AuthForm from "./AuthForm.jsx";
import InputField from "./InputField.jsx";
import clientRoutes from '../../routes/clientRoutes.js';

const Login = () => {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <AuthForm formMessage='Sign in'>
          <InputField inputName='Your login or email' inputType="text" inputPlaceholder='email@email.com'/>
          <InputField inputName='Password' inputType="password" inputPlaceholder='••••••••'/>

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
              </div>
            </div>
            <a href={clientRoutes.fullPassResetPath()} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
          </div>

          <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
          
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account yet? <a href={clientRoutes.fullRegisterPath()} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
          </p>
        </AuthForm>
      </section>
    </div>
  );
}

export default Login;

import React from "react";

import AuthForm from "./AuthForm.jsx";
import InputField from "./InputField.jsx";
import clientRoutes from '../../routes/clientRoutes.js';

const Register = () => {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <AuthForm formMessage='Create a new account'>
          <InputField inputName='Your login' inputType="text" inputPlaceholder='my_login123'/>
          <InputField inputName='Email' inputType="email" inputPlaceholder='email@email.com'/>
          <InputField inputName='Full name' inputType="text" inputPlaceholder='Name Surname'/>
          <InputField inputName='Password' inputType="password" inputPlaceholder='••••••••'/>
          <InputField inputName='Password Confirm' inputType="password" inputPlaceholder=''/>

          <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <a href={clientRoutes.fullRegisterPath()} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
          </p>
        </AuthForm>
      </section>
    </div>
  );
}

export default Register;

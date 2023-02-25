import React from 'react';

import Spinner from '../../common/Spinner.jsx';
import ProfileDataRow from './ProfileDataRow.jsx';
import ProfileDataInputRow from './ProfileDataInputRow.jsx';
import $api from '../../../../utils/api.js';
import apiClientRoutes from '../../../routes/api/apiClientRoutes.js';
import { useMutation } from 'react-query';
import { UsersService } from '../../../../services/users.service.js';

const ProfileDataTab = ({ userData, setUserData }) => {
  // console.log(userData);

  let temp = {};
  if (!userData) {
    return <Spinner />
  } else {
    Object.keys(userData.values).forEach((key, i) => {
      temp[key] = "";
    });
  }
  
  const [errors, setErrors] = React.useState({});
  const [submitData, setSubmitData] = React.useState(userData?.values);
  const [editActive, setEditActive] = React.useState(false);
  
  const editButtonHandle = () => {
    console.log("edit epta nado");
    setEditActive(!editActive);
  };
  const { isLoading, mutateAsync } = useMutation('change info user', (data) => UsersService.updateInfoUser(data), 
      {
        onSuccess: () => {
          setUserData({ values: submitData });
          setEditActive(!editActive);
        },
        onError: (err) => {
          setErrors({
            ...errors,
            ...err.response.data.errors.errors.reduce((acc, i) => {
              return {
                ...acc,
                [i.param]: i.msg,
              };
            }, {})
          })
          // галимо то что у тебя снейком first_name и тд. потому что у меня с сервера кемелом приходит :(
          // но в errors оно заносится
          console.log(errors);
        }
      }
    )

  const submitButtonHandle = async () => {
      const { id, login, first_name: firstName, last_name: lastName, second_name: secondName } = submitData;
      await mutateAsync({ id, login, firstName, lastName, secondName });
  }

  
  return !userData ? <Spinner /> : (
    <div>
      <div className="flex">
        <h4 className="text-xl text-gray-900 font-bold">Personal Info </h4>
        <a>&nbsp; &nbsp;</a>
        <button onClick={ editButtonHandle } className="pl-2.5 flex p-2.5 bg-blue-500 rounded-xl hover:rounded-3xl hover:bg-blue-600 transition-all duration-300 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 23 23" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
          {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg> */}
        </button>
      </div>
      
      <ul className="mt-2 text-gray-700">
        {
          editActive
          ?
          <div>
            <ProfileDataInputRow id="login" name="Login:" value={userData.values.login} data={submitData} setData={setSubmitData} errors={errors} setErrors={setErrors} />
            <ProfileDataInputRow id="first_name" name="First name:" value={userData.values.first_name} data={submitData} setData={setSubmitData} errors={errors} setErrors={setErrors} />
            <ProfileDataInputRow id="second_name" name="Second name:" value={userData.values.second_name} data={submitData} setData={setSubmitData} errors={errors} setErrors={setErrors} />
            <ProfileDataInputRow id="last_name" name="Last name:" value={userData.values.last_name} data={submitData} setData={setSubmitData} errors={errors} setErrors={setErrors} />
            <ProfileDataRow id="phone_number" name="Mobile:" value={userData.values.phone_number} />
            <ProfileDataRow id="email" name="Email:" value={userData.values.email} />
            <button onClick={submitButtonHandle} disabled={isLoading} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save changes</button>
          </div>
          :
          <div>
            <ProfileDataRow id="login" name="Login:" value={userData.values.login} />
            <ProfileDataRow id="first_name" name="First name:" value={userData.values.first_name} />
            <ProfileDataRow id="second_name" name="Second name:" value={userData.values.second_name} />
            <ProfileDataRow id="last_name" name="Last name:" value={userData.values.last_name} />
            <ProfileDataRow id="phone_number" name="Mobile:" value={userData.values.phone_number} />
            <ProfileDataRow id="email" name="Email:" value={userData.values.email} />
          </div>
        }
      </ul>
    </div>
  )
}

export default ProfileDataTab;

{/* <ProfileDataRow id="first_name" name="First name:" value="Hyilo 1name" />
<ProfileDataRow id="second_name" name="Second name:" value="Hyilo 2name" />
<ProfileDataRow id="last_name" name="Last name:" value="Hyilo 3name" />
<ProfileDataRow id="phone_number" name="Mobile:" value="+1234567890" />
<ProfileDataRow id="email" name="Email:" value="email_dayna@mail.com" /> */}

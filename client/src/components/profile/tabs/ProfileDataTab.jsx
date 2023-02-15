import React from 'react';

import ProfileDataRow from './ProfileDataRow.jsx';


const ProfileDataTab = ({ userData }) => {
  // console.log(userData);
  return (
    <div>
      <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
      <ul className="mt-2 text-gray-700">
        {/* <ProfileDataRow name="First name:" value={ userData.values.first_name } /> */}
        <ProfileDataRow id="first_name" name="First name:" value="Hyilo 1name" />
        <ProfileDataRow id="second_name" name="Second name:" value="Hyilo 2name" />
        <ProfileDataRow id="last_name" name="Last name:" value="Hyilo 3name" />
        <ProfileDataRow id="phone_number" name="Mobile:" value="+1234567890" />
        <ProfileDataRow id="email" name="Email:" value="email_dayna@mail.com" />
      </ul>
    </div>
  )
}

export default ProfileDataTab;

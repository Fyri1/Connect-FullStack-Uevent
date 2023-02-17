import React from 'react';

import Spinner from '../../common/Spinner.jsx';
import ProfileDataRow from './ProfileDataRow.jsx';


const ProfileDataTab = ({ userData }) => {
  console.log(userData);
  return !userData ? <Spinner /> : (
    <div>
      <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
      <ul className="mt-2 text-gray-700">
        {/* <ProfileDataRow id="first_name" name="First name:" value="Hyilo 1name" />
        <ProfileDataRow id="second_name" name="Second name:" value="Hyilo 2name" />
        <ProfileDataRow id="last_name" name="Last name:" value="Hyilo 3name" />
        <ProfileDataRow id="phone_number" name="Mobile:" value="+1234567890" />
        <ProfileDataRow id="email" name="Email:" value="email_dayna@mail.com" /> */}

        <ProfileDataRow id="first_name" name="First name:" value={userData.values.first_name} />
        <ProfileDataRow id="second_name" name="Second name:" value={userData.values.second_name} />
        <ProfileDataRow id="last_name" name="Last name:" value={userData.values.last_name} />
        <ProfileDataRow id="phone_number" name="Mobile:" value={userData.values.phone_number} />
        <ProfileDataRow id="email" name="Email:" value={userData.values.email} />
      </ul>
    </div>
  )
}

export default ProfileDataTab;

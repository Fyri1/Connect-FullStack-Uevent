import React from 'react';

import ProfileHead from './ProfileHead.jsx';
import UserDataTabsSelector from './tabs-selector/UserDataTabsSelector.jsx';
import UserEventsTabsSelector from './tabs-selector/UserEventsTabsSelector.jsx';
import Spinner from '../common/Spinner.jsx';

import '../css/Profile.css';
import data from '../../temp/user_data.json';
import { useUserProfile } from '../../../hooks/useUserProfile.js';


const UserProfilePage = () => {
  // const [userData, setUserData] = React.useState(data);
  const { userInfo, isLoading } = useUserProfile();
  console.log(userInfo);
  console.log(isLoading);

  // return isLoading ? <Spinner /> : (
  return (
    <div>
      { isLoading ? <Spinner /> : <></> }
      <div className="h-full bg-gray-200 p-8">
        {/* TYT PIZDEC MAKSIMA YA TYDA LEZT NE HO4Y! */}
        <ProfileHead userData={userInfo} />
        
        <div className="flex w-full">
          {/* Profile details and settings */}
          <div className="h-full w-[40%] mr-[1%]"><UserDataTabsSelector userData={userInfo} isLoading={isLoading} /></div>

          {/* Events and tickets list */}
          <div className="h-full w-[60%] ml-[1%]"><UserEventsTabsSelector userData={userInfo} isLoading={isLoading} /></div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;

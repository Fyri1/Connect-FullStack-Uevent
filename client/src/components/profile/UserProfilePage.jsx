import React from 'react';

import ProfileHead from './ProfileHead.jsx';
import TabsSelector from './tabs-selector/TabsSelector.jsx';

import '../css/Profile.css';
import data from '../../temp/user_data.json';
import { useUserProfile } from '../../../hooks/useUserProfile.js';


const UserProfilePage = () => {
  const [userData, setUserData] = React.useState(data);
  
  const { userInfo, isLoading } = useUserProfile();
  console.log(userInfo);
  console.log(isLoading);



  return isLoading ? <></> : (
    <div>
      <div className="h-full bg-gray-200 p-8">
        {/* TYT PIZDEC MAKSIMA YA TYDA LEZT NE HO4Y! */}
        <ProfileHead userData={userInfo} />
        
        {/* Profile details and settings */}
        <TabsSelector userData={userInfo} />
      </div>
    </div>
  );
}

export default UserProfilePage;

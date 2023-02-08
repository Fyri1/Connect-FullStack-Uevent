import React from 'react';

import ProfileHead from './ProfileHead.jsx';
import TabsSelector from './tabs-selector/TabsSelector.jsx';

import '../css/Profile.css';
import data from '../../temp/user_data.json';


const UserProfilePage = () => {
  const [userData, setUserData] = React.useState(data);
  const [isLoading, setIsLoading] = React.useState(true);

  const onLoad = () => {
    setUserData(data);
    setIsLoading(false);
  };

  React.useEffect(() => {
    onLoad();
  }, [isLoading]);

  return (
    <div>
      <div className="h-full bg-gray-200 p-8">
        {/* TYT PIZDEC MAKSIMA YA TYDA LEZT NE HO4Y! */}
        <ProfileHead userData={userData} />
        
        {/* Profile details and settings */}
        <TabsSelector userData={userData} />
      </div>
    </div>
  );
}

export default UserProfilePage;

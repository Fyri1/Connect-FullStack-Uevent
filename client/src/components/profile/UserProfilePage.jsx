import React from 'react';

import ProfileHead from './ProfileHead.jsx';
import UserDataTabsSelector from './tabs-selector/UserDataTabsSelector.jsx';
import UserEventsTabsSelector from './tabs-selector/UserEventsTabsSelector.jsx';
import Spinner from '../common/Spinner.jsx';
import Popup from '../common/popup/Popup.jsx';
import ToastSuccess from '../common/toast/ToastSuccess.jsx';
import ToastWarning from '../common/toast/ToastWarning.jsx';
import ToastError from '../common/toast/ToastError.jsx';

import '../css/Profile.css';
import { useUserProfile } from '../../../hooks/useUserProfile.js';


const UserProfilePage = () => {
  // const [userData, setUserData] = React.useState(data);
  const { userInfo, isLoading } = useUserProfile();

  const [userData, setUserData] = React.useState(userInfo);
  const [popupContent, setPopupContent] = React.useState();
  const [popupActive, setPopupActive] = React.useState(false);

  React.useEffect(() => {
    setUserData(userInfo);
  }, [userInfo]);

  // return isLoading ? <Spinner /> : (
  return (
    <div>
      { isLoading ? <Spinner /> : <></> }
      <Popup active={popupActive} setActive={setPopupActive}>
        { popupContent }
      </Popup>

      <div className="h-full bg-gray-200 p-8">
        <ProfileHead userData={userInfo} />
        
        <div className="flex w-full">
          {/* Profile details and settings */}
          <div className="h-full w-[40%] mr-[1%]"><UserDataTabsSelector userData={userData} setUserData={setUserData} isLoading={isLoading} /></div>

          {/* Events and tickets list */}
          <div className="h-full w-[60%] ml-[1%]"><UserEventsTabsSelector userData={userData} setPopupContent={setPopupContent} setPopupActive={setPopupActive} isLoading={isLoading} /></div>
        </div>
        
        {/* <div className='fixed bottom-0 right-4 w-72'>
          <ToastSuccess id="gavno1" message="sasi dayn nice" />
          <ToastWarning id="gavno2" message="sasi dayn gavno" />
          <ToastError id="gavno3" message="sasi dayn error" />
        </div> */}

      </div>
    </div>
  );
}

export default UserProfilePage;

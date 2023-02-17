import React from 'react';

import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

import ProfileDataTab from '../tabs/ProfileDataTab.jsx';
import EmailChangeTab from '../tabs/EmailChangeTab.jsx';
import PassChangeTab from '../tabs/PassChangeTab';


const UserDataTabsSelector = ({ userData, isLoading }) => {
  console.log("ebat moi hyi!")
  return (
    <div className="my-4 flex flex-col"> 
      <div className="w-full flex flex-col">
        <div className="flex-1 bg-white rounded-lg shadow-xl py-3 px-6">
          {/* Tabs selector */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="UserDataTabContent" data-tabs-toggle="UserDataTabContent" role="tablist">
              <TabButton id="profile" name="Profile" />
              <TabButton id="emailEdit" name="Change email" />
              <TabButton id="passEdit" name="Change password" />
            </ul>
          </div>
          
          {/* Tabs temselves */}
          <div id="UserDataTabContent">
            {/* <TabContent id="profile">{ isLoading ? <></> : <ProfileDataTab userData={userData} /> }</TabContent>
            <TabContent id="edit">{ isLoading ? <></> : <ProfileEditTab userData={userData} isLoading={isLoading} /> }</TabContent> */}
            <TabContent id="profile"><ProfileDataTab userData={userData} /></TabContent>
            <TabContent id="emailEdit"><EmailChangeTab userData={userData} /></TabContent>
            <TabContent id="passEdit"><PassChangeTab userData={userData} /></TabContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDataTabsSelector;

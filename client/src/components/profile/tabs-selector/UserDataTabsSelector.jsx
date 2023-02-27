import React from 'react';

import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

import ProfileDataTab from '../tabs/ProfileDataTab.jsx';
import EmailChangeTab from '../tabs/EmailChangeTab.jsx';
import PassChangeTab from '../tabs/PassChangeTab';


const UserDataTabsSelector = ({ userData, setUserData, isLoading }) => {
  console.log("ebat moi hyi!")
  return (
    <div className="my-4 flex flex-col"> 
      <div className="w-full flex flex-col">
        <div className="flex-1 bg-white rounded-lg shadow-xl py-3 px-6" data-carousel="static" id="indicators-carousel">
          {/* Tabs selector */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
              <TabButton id="profile" slideNumber="1" current={true} name="Personal Info" />
              <TabButton id="emailEdit" slideNumber="2" current={false} name="Email" />
              <TabButton id="passEdit" slideNumber="3" current={false} name="Password" />
            </ul>
          </div>

          {/* Tabs temselves */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <TabContent id="profile"><ProfileDataTab userData={userData} setUserData={setUserData} /></TabContent>
            <TabContent id="emailEdit"><EmailChangeTab userData={userData} setUserData={setUserData} /></TabContent>
            <TabContent id="passEdit"><PassChangeTab userData={userData} setUserData={setUserData} /></TabContent>
            <TabContent id="phantom"></TabContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDataTabsSelector;

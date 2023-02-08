import React from 'react';

import TabButton from '../tabs-selector/TabButton.jsx';
import TabContent from '../tabs-selector/TabContent.jsx';

import EmailChangeTab from './EmailChangeTab.jsx';
import PassChangeTab from './PassChangeTab.jsx'
import PassResetTab from './PassResetTab.jsx';
import ProfileDataEditTab from './ProfileDataEditTab.jsx';


const ProfileEditTab = ({ userData }) => {
  return (
    <div className="flex bg-white rounded-lg">
      {/* Tabs selector */}
      <div className="border-b w-40 border-gray-200 dark:border-gray-700">
        <ul className="-mb-px text-sm font-medium text-left" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <TabButton id="email_change" name="Email change" />
          <TabButton id="pass_change" name="Password change" />
          <TabButton id="pass_reset" name="Password reset" />
          <TabButton id="user_data_change" name="Personal data" />
        </ul>
      </div>
      
      {/* Tabs temselves */}
      <div id="myTabContent">
        <TabContent id="email_change"><EmailChangeTab userData={userData} /></TabContent>
        <TabContent id="pass_change"><PassChangeTab userData={userData} /></TabContent>
        <TabContent id="pass_reset"><PassResetTab userData={userData} /></TabContent>
        <TabContent id="user_data_change"><ProfileDataEditTab userData={userData} /></TabContent>
      </div>
    </div>
  )
}

export default ProfileEditTab;

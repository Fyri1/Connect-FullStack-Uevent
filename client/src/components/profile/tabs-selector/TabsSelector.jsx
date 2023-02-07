import React from 'react';

import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

import ProfileDataTab from '../ProfileDataTab.jsx';
import ProfileEditTab from '../ProfileEditTab.jsx';
import EventsTab from '../EventsTab.jsx';


const TabsSelector = ({ userData }) => {
  return (
    <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
      <div className="w-full flex flex-col 2xl:w-1/3">
        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
          {/* Tabs selector */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <TabButton id="profile" name="Profile" />
              <TabButton id="edit" name="Edit Profile" />
              <TabButton id="events" name="Your events" />
              <TabButton id="contacts" name="contacts" />
            </ul>
          </div>
          
          {/* Tabs temselves */}
          <div id="myTabContent">
            <TabContent id="profile"><ProfileDataTab userData={userData} /></TabContent>
            <TabContent id="edit"><ProfileEditTab userData={userData} /></TabContent>
            <TabContent id="events"><EventsTab userData={userData} /></TabContent>
            <TabContent id="contacts"><EventsTab userData={userData} /></TabContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabsSelector;

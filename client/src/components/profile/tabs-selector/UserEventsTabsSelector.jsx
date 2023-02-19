import React from 'react';

import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

import EventsTab from '../tabs/EventsTab.jsx';


const UserEventsTabsSelector = ({ userData, setUserData, isLoading }) => {
  return (
    <div className="my-4 flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex-1 bg-white rounded-lg shadow-xl py-3 px-6">
          {/* Tabs selector */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="UserEventsTab" data-tabs-toggle="UserEventsTabContent" role="tablist">
              <TabButton id="events" name="Saved events" />
              <TabButton id="tickets" name="Your tickets" />
            </ul>
          </div>
          
          {/* Tabs temselves */}
          <div id="UserEventsTabContent">
            <TabContent id="events"><EventsTab userData={userData} /></TabContent>
            <TabContent id="tickets"><EventsTab userData={userData} /></TabContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserEventsTabsSelector;

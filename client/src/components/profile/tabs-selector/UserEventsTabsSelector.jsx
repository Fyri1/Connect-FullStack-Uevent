import React from 'react';

import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

import EventsTab from '../tabs/EventsTab.jsx';


const UserEventsTabsSelector = ({ userData, setUserData, isLoading }) => {
  return (
    <div className="my-4 flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex-1 bg-white rounded-lg shadow-xl py-3 px-6" data-carousel="static" id="indicators-carousel">
          {/* Tabs selector */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
              <TabButton id="savedEvents" slideNumber="1" active={true} category="userEventsData" name="Saved events" />
              <TabButton id="tickets" slideNumber="2" active={false} category="userEventsData" name="Your tickets" />
            </ul>
          </div>
          
          {/* Tabs temselves */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            {/* For test purposes */}
            <TabContent id="savedEvents">Parasha 1</TabContent>
            <TabContent id="tickets">Parasha 2</TabContent>
            {/* For test purposes */}

            {/* Change to this for prod */}
            {/* <TabContent id="savedEvents"><EventsTab userData={userData} /></TabContent>
            <TabContent id="tickets"><EventsTab userData={userData} /></TabContent> */}
            {/* Change to this for prod */}

            <TabContent id="phantom2"></TabContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserEventsTabsSelector;

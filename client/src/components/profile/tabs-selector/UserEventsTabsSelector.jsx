import React from 'react';

import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

import SavedEventsTab from '../tabs/SavedEventsTab.jsx';
import UserTicketsTab from '../tabs/UserTicketsTab.jsx';


const UserEventsTabsSelector = ({ userData, setPopupContent, setPopupActive, isLoading }) => {
  // console.log(userSavedEventsData);
  // console.log(userTicketsData);


  return (
    <div className="my-4 flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex-1 bg-white rounded-lg shadow-xl py-3 px-6" data-carousel="static" id="indicators-carousel">
          {/* Tabs selector */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            
              <TabButton id="savedEvents" slideNumber="1" active={true} category="userEventsData" name="Saved events" />
              <li className="mr-2" role="presentation">
                <button data-carousel-slide-to="0" id={"phantom-tab"} type="button"></button>
              </li>
              <TabButton id="tickets" slideNumber="2" active={false} category="userEventsData" name="Your tickets" />
            </ul>
          </div>
          
          {/* Tabs temselves */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            
            {/* Change to this for prod */}
            <TabContent id="savedEvents"><SavedEventsTab userData={userData} setPopupContent={setPopupContent} setPopupActive={setPopupActive}/></TabContent>
            <TabContent id="phantom2"></TabContent>
            <TabContent id="tickets"><UserTicketsTab userData={userData} setPopupContent={setPopupContent} setPopupActive={setPopupActive}/></TabContent>
            {/* <TabContent id="tickets">Parasha 2</TabContent> */}
            {/* Change to this for prod */}
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserEventsTabsSelector;

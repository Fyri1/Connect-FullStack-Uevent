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
              <li className="mr-2" role="presentation">
                <button aria-current="true" aria-label="Slide 1" data-carousel-slide-to="1" className="inline-block p-4 border-b-2 rounded-t-lg" id={"Profile" + "-tab"} type="button" >Profile</button>
              </li>

              <li className="mr-2" role="presentation">
                <button aria-current="false" aria-label="Slide 2" data-carousel-slide-to="2" className="inline-block p-4 border-b-2 rounded-t-lg" id={"Email" + "-tab"} type="button" >Email</button>
              </li>

              <li className="mr-2" role="presentation">
                <button aria-current="false" aria-label="Slide 3" data-carousel-slide-to="3" className="inline-block p-4 border-b-2 rounded-t-lg" id={"Pass" + "-tab"} type="button" >Pass</button>
              </li>
            </ul>
          </div>

          {/* Tabs temselves */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <TabContent id="profile"><ProfileDataTab userData={userData} setUserData={setUserData} /></TabContent>
            <TabContent id="emailEdit"><EmailChangeTab userData={userData} setUserData={setUserData} /></TabContent>
            <TabContent id="passEdit"><PassChangeTab userData={userData} setUserData={setUserData} /></TabContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDataTabsSelector;

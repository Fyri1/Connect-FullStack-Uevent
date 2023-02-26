import React from 'react';

import ProfileHead from './ProfileHead.jsx';
import UserDataTabsSelector from './tabs-selector/UserDataTabsSelector.jsx';
import UserEventsTabsSelector from './tabs-selector/UserEventsTabsSelector.jsx';
import Spinner from '../common/Spinner.jsx';
import ToastSuccess from '../common/toast/ToastSuccess.jsx';
import ToastWarning from '../common/toast/ToastWarning.jsx';
import ToastError from '../common/toast/ToastError.jsx';

import '../css/Profile.css';
import { useUserProfile } from '../../../hooks/useUserProfile.js';


const UserProfilePage = () => {
  // const [userData, setUserData] = React.useState(data);
  const { userInfo, isLoading } = useUserProfile();
  const [userData, setUserData] = React.useState(userInfo);
  React.useEffect(() => {
    setUserData(userInfo);
  }, [userInfo]);
  console.log(userInfo);
  console.log(isLoading);

  // return isLoading ? <Spinner /> : (
  return (
    <div>
      { isLoading ? <Spinner /> : <></> }
      <div className="h-full bg-gray-200 p-8">
        {/* TYT PIZDEC MAKSIMA YA TYDA LEZT NE HO4Y! */}
        <ProfileHead userData={userInfo} />
        
        <div className="flex w-full">
          {/* Profile details and settings */}
          <div className="h-full w-[40%] mr-[1%]"><UserDataTabsSelector userData={userData} setUserData={setUserData} isLoading={isLoading} /></div>

          {/* Events and tickets list */}
          <div className="h-full w-[60%] ml-[1%]"><UserEventsTabsSelector userData={userData} setUserData={setUserData} isLoading={isLoading} /></div>
        </div>
        
        {/* <div className='fixed bottom-0 right-4 w-72'>
          <ToastSuccess id="gavno1" message="sasi dayn nice" />
          <ToastWarning id="gavno2" message="sasi dayn gavno" />
          <ToastError id="gavno3" message="sasi dayn error" />
        </div> */}
        
        {/* <div className="my-4 flex flex-col"> 
          <div className="w-full flex flex-col">
            <div className="flex-1 bg-white rounded-lg shadow-xl py-3 px-6" data-carousel="static" id="indicators-carousel">
              
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                  <li className="mr-2" role="presentation">
                    <button aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" className="inline-block p-4 border-b-2 rounded-t-lg" id={"Profile" + "-tab"} type="button" >Profile</button>
                  </li>

                  <li className="mr-2" role="presentation">
                    <button aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1" className="inline-block p-4 border-b-2 rounded-t-lg" id={"Email" + "-tab"} type="button" >Email</button>
                  </li>

                  <li className="mr-2" role="presentation">
                    <button aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2" className="inline-block p-4 border-b-2 rounded-t-lg" id={"Pass" + "-tab"} type="button" >Pass</button>
                  </li>
                </ul>
              </div>

              <div className="relative h-56 overflow-hidden rounded-lg">
                <div className="hidden p-3 items-center justify-center w-full rounded-lg bg-gray-50 dark:bg-gray-800 duration-700 ease-in-out" data-carousel-item="active">
                  <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                  <p>Parasha1</p>
                </div>
                
                <div className="hidden p-3 items-center justify-center w-full rounded-lg bg-gray-50 dark:bg-gray-800 duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                  <p>Parasha2</p>
                </div>
                
                <div className="hidden p-3 items-center justify-center w-full rounded-lg bg-gray-50 dark:bg-gray-800 duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                  <p>Parasha3</p>
                </div>
              </div>

            </div>
          </div>
        </div> */}


        {/* <div id="indicators-carousel" className="relative" data-carousel="static">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
              <p>Parasha1</p>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
              <p>Parasha2</p>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
              <p>Parasha3</p>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
              <p>Parasha4</p>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
              <p>Parasha5</p>
            </div>
          </div>
          
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default UserProfilePage;

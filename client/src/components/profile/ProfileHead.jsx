import React from 'react';
import Spinner from '../common/Spinner.jsx';
import default_avatar from '../../temp/avatar.png';
import apiClientRoutes from '../../routes/api/apiClientRoutes.js';

const ProfileHead = ({ userData }) => {
  console.log(userData)
  return !userData ? <Spinner /> : (
    <div className="bg-white rounded-lg shadow-xl pb-8">
      <div className="w-full h-[250px]">
        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg"></img>
      </div>

      <div className="flex flex-col items-center -mt-20">
        <img src={userData.values['picture'] ? apiClientRoutes.getPathAvatar(userData.values['picture']) : default_avatar} className="w-40 border-4 border-white rounded-full"></img>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl">
            { 
              userData.values?.first_name && userData.values.last_name ? userData.values.first_name + " " + userData.values.last_name :
              userData.values.email
            }
          </p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
        </div>
        <p className="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
        <p className="text-sm text-gray-500">New York, USA</p>
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
        <div className="flex items-center space-x-4 mt-2">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 448 512" fill="currentColor">
              <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/>
            </svg>
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileHead;

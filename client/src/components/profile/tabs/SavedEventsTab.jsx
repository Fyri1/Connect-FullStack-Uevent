import React from 'react';

import Spinner from '../../common/Spinner.jsx';

import '../../css/events-tab.css';

//// TEMP ////
import user_saved_events from '../../../temp/user_saved_events.json';
import memFile from '../../../temp/the-rock-eyebrow-raise-sound-effect-By-Tuna.mp3';
//// TEMP ////


const SavedEventsTab = ({ userData, setPopupContent, setPopupActive }) => {
  const [userSavedEventsData, setUserSavedEventsData] = React.useState(user_saved_events);
  // const mem = new Audio("../../../temp/the-rock-eyebrow-raise-sound-effect-By-Tuna.mp3");
  const mem = new Audio(memFile);
  
  const SavedEventsRowsElements = userSavedEventsData.map((eventData) => {
    const redeemButtonClick = () => {
      console.log("redeem pidorasa");
      
      mem.play();
      const button = document.getElementById(eventData.id + "-id").classList;
      if (button.contains("redeem-button")) {
        button.remove("redeem-button");
        button.add("redeem-button-rotated");
      } else {
        button.remove("redeem-button-rotated");
        button.add("redeem-button");
      }
    }

    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="py-5">{ eventData.title }</td>
        <td className="py-5">{ eventData.description }</td>
        <td className="py-5">{ eventData.city + ", " + eventData.address }</td>
        <td className="py-5">{ eventData.event_start + " - " + eventData.event_end }</td>
        
        <td>
          <button onClick={redeemButtonClick} className="w-7 h-7">
            <svg aria-hidden="true" id={eventData.id + "-id"} className="redeem-button w-5 h-5 text-gray-500 hover:rounded-full dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"></path>
            </svg>
          </button>
        </td>
      </tr>
    )
    
  });

  return (
    <div>
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Address</th>
            <th>Duration</th>
          </tr>
        </thead> */}

        <tbody>
          { SavedEventsRowsElements }
        </tbody>
      </table>
    </div>
  )
};

export default SavedEventsTab;
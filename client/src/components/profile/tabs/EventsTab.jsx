import React from 'react';

import { useUserTickets } from '../../../../hooks/useUserTickets.js';
import Spinner from '../../common/Spinner.jsx';

import '../../css/events-tab.css';


const EventsTab = ({ userData }) => {
  if (!userData) {
    return <Spinner />;
  }
  const { isLoading, userTickets } = useUserTickets(userData.values.id);
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {!userTickets
        ? `You have not purchased tickets yet`
        : userTickets.map(({ id, event_id, name, price, start, end }, i) => (
            <div key={i}>{name}</div>
          ))}
                <div class="md:flex shadow-lg  mx-6 max-w-lg md:max-w-2xl h-64">
            <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"/>
            <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                <div class="flex items-center">
                  <h2 class="text-xl text-gray-800 font-medium mr-auto">Tiket Name</h2>
                  <p class="text-gray-800 font-semibold tracking-tighter">
                      Price: 48$
                  </p>
                </div>
                <p class="text-sm text-gray-700 mt-4">
                  Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
                </p>
                <p>&nbsp; </p>
                <div>
                  <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" ><a>  02.03.2023</a></a>
                </div>

                <div class="time-info-div">
                  <div className='time2'>
                    <a className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >Sturday&nbsp; </a>
                  </div>
                  <div className='time2'>
                    <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 25 27" stroke="currentColor" strokeWidth="2">
                      
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        
                    </svg>
                  </div>
                  <div className='time2'>
                   <a className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >20:00  </a>
                  </div>
                </div>
                <div class="flex items-center justify-end mt-4 top-auto">
                  <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">Return </button>
                </div>
            </div>
          </div>
          
    </div>
  );
};

export default EventsTab;

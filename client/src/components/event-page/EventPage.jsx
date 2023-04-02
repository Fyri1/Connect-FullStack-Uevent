import React from 'react';
import { useEvent } from '../../../hooks/events/useEvent.js';
import { useUserFavoriteEvent } from '../../../hooks/user/useUserFavoriteEvent.js';
import { useParams } from 'react-router-dom';

import Spinner from '../common/Spinner.jsx';
import EventDetailsHead from './event-details/EventDetailsHead.jsx';
import EventDetailsBody from './event-details/EventDetailsBody.jsx';
import RecommendSection from './recommendations/RecommendSection.jsx';
import CommentsSection from './comments/CommentsSection.jsx';

import '../css/EventPage.css';
import '../css/event-card.css';


const EventPage = ({ currentUser }) => {
  const id = useParams()['id'];
  const { isLoading, event } = useEvent(id);
  const favoriteEvent = useUserFavoriteEvent();
  console.log(favoriteEvent)
  const unfoldButtonHandle = () => {
    console.log("pidorasa nado pokazat");
    const textElement = document.getElementsByClassName("text-retracted")[0];
    const textElementDiv = document.getElementsByClassName("main-event-content-retracted")[0];
    console.log(textElement);
    textElement.classList.remove("text-retracted");
    textElement.classList.add("text-unfolded");
    textElementDiv.classList.remove("main-event-content-retracted");
    textElementDiv.classList.add("main-event-content-unfolded");
  }

  // {favoriteEvent.isLoading ? <></> : <EventDetailsBody eventData={event} isFavorite={favoriteEvent.favorite.find((event) => event.id === id)}/>}
  return isLoading ? <Spinner /> : (
    <div>          
      <EventDetailsBody eventData={event} />
      
      <div className="container m-auto py-6 px-4 sm:p-6 md:py-10 md:px-8 dark:bg-dark-bg-900">
        
        <div className="">
          
        {/* <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        </div> */}

        <div className=" mb-9 dark:bg-dark-bg-800 rounded-lg">
          <div>
            <div className=" px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
              <EventDetailsHead eventData={event} />

              <div className="Map">
                <h1 className="text-center bg-white rounded-md py-5 max-w-2xl mx-auto text-2xl font-bold text-gray-500 dark:text-dark-text-400 dark:bg-dark-bg-900">MAP</h1>
                <div className="flex flex-row items-center">

                  <div className='flex flex-col justify-center items-center'>
                    <div className='bg-[#8e5f27] h-4 w-8 rounded-t-md'></div>
                    <div className='w-12 h-60 bg-[#0c2e41] rounded-t-md'></div>
                    <div className='w-12 h-2 bg-yellow-600 rounded-t-full -mt-2'></div>
                    <div className='bg-[#8e5f27] h-4 w-8 rounded-t-md'></div>
                  </div>
                  <div
                    className=' box-content relative h-52 w-[500px] relative border-[#0c2e41] border-8 slide-ltr sliding-ltr flex flex-row ease'> 
                    <img className='h-full object-fit'src="https://i.ibb.co/xHVTzh7/2-VM4-JQb-Z4j-E.jpg"></img>
                    <img className='h-full object-fit'src="https://i.ibb.co/CwdZZzv/chrome-EBWLj-WZm-RO.png"></img>
                  </div>
                </div>
              </div>


              </div>
              <div className="md:mt-0 md:w-1/4 ">
                
                <div className="sticky top-20 mt-6 rounded-lg border bg-white p-0 shadow-md  ">

                  <div>
                    <div className="  bg-blue-500 ">
                      <div className=" start flex">
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" strokeWidth={1.5}  className=" ml-4 my-4 h-6 w-6 ">
                          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                          <path clipRule="evenodd" fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"></path>
                        </svg>
                        <p className="text-date-ticket my-4 pl-2 ">28 березня 2023, вт</p>
                        <p className=" my-4 pl-2  " >18:00</p>
                      </div>
                    </div>
                  </div>
                  <div className=" ml-4 mt-3">
                    <div className="mb-2 justify-between">
                      <div className="pb-1  text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  strokeWidth={1.5} stroke="currentColor" className="-mt-12 h-12 w-12 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        
                        </svg>
                        <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">МЦКМ (Жовтневий палац) Київ, Алея Героїв Небесної Сотні, 1</p>
                      </div>
                    </div>

                    <div className="mb-2 flex justify-between">
                      <div className="pb-1 text-indigo-600 flex items-center dark:text-indigo-400">
                        {/* <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                           */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" -mt-6 h-8 w-8 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                        </svg>
                        <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">ФОП Волошенко Людмила Анатоліївна</p>
                      </div>

                    </div>


                    <div className="mb-2 flex justify-between">
                      <div className="pb-1 text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
                        </svg>
                        <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">від 250 грн.</p>
                      </div>
                    </div>

                    <div className="mb-2 flex justify-between">
                      <div className="pb-1 text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path>
                        </svg>
                        <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">Tickets left: 1488</p>
                      </div>

                    </div>
                  </div>
  

                  <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                </div>
              </div>
            </div>
              <RecommendSection event={event}/>
              <CommentsSection eventId={id} />
          </div>
            
            
        </div>
          

          {/* govna */}
          {/* ebat kakogo govna */}

          
        </div>
      </div>
    </div>
  );
}

export default EventPage;

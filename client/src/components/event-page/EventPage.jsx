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
      
      <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 dark:bg-dark-bg-900">
        
        <div className="max-w-4xl mx-auto lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2">
          
        {/* <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        </div> */}

        <div className=" mb-9 dark:bg-dark-bg-800 rounded-lg">
          <div>
            <div className="justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
              <EventDetailsHead eventData={event} />


              </div>
              <div className="md:mt-0 md:w-1/4 ">
                
                <div className="sticky top-20 mt-6 rounded-lg border bg-white p-0 shadow-md  ">

                  <div className="   ">
                  {/* fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" */}
                    <div className="  bg-blue-500 ">
                      <div className=" start flex">
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" strokeWidth={1.5}  className=" my-4 h-6 w-6 t">
                          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                          <path clip-rule="evenodd" fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"></path>
                        </svg>
                        <p className="my-4 pl-2 dark:text-dark-text-400">28 березня 2023, вт. 18:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2 flex justify-between">
                    <div className="start flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-indigo-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <p className="pl-2 dark:text-dark-text-400">МЦКМ (Жовтневий палац) Київ, Алея Героїв Небесної Сотні, 1</p>
                    </div>
                  </div>

                  <div className="mb-2 flex justify-between">
                    <div className="start flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-indigo-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <p className="pl-2 dark:text-dark-text-400">ФОП Волошенко Людмила Анатоліївна</p>
                    </div>

                  </div>


                  <div className="mb-2 flex justify-between">
                    <div className="start flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-indigo-400">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"></path>
                      </svg>
                      <p className="pl-2 dark:text-dark-text-400">від 250 грн.</p>
                    </div>
                  </div>

                  <div className="mb-2 flex justify-between">
                    <div className="pb-1 text-indigo-600 flex items-center dark:text-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                      </svg>
                      <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">Tickets left: 1488</p>
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

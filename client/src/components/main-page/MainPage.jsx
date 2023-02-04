import React from 'react';

import Spinner from '../common/Spinner.jsx';
import Sidebar from './Sidebar.jsx';
import EventElement from './EventElement.jsx';

import apiRoutes from '../../routes/api/apiClientRoutes.js';
import clientRoutes from '../../routes/client/clientRoutes.js';
import '../css/event-card.css';
import '../css/main-page.css';
import '../css/event-card.css';
import data from '../../temp/events_data.json';

const MainPage = () => {
  const [eventsList, setEventsList] = React.useState([]);
  const [userData, setUserData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const onLoad = () => {
    try {
      // Throw request on api for events and logged user info if any
      console.log('sasi zagryzka: ' + isLoading);
      setEventsList(data);
      setUserData({
        fullname: 'dayn',
        login: 'dayn_login',
        email: 'dayn_email',
      });
      setIsLoading(false);
    } catch (error) {
      console.log('error pizdec! ' + error);
    }
  };

  React.useState(() => {
    onLoad();
  }, []);
  const eventsElements = eventsList.map((event, i) => {
    return <EventElement key={event.i} event={event} />;
  });

  console.log(eventsElements);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <p className='Main-center-txt'>This is MainPage</p>
          {/* <Sidebar /> */}
          <div className="main-content">
            <div class="col-sm-9 padding-right">
              <div class="features_items">
                
                <h2 class="title text-center">Features Items</h2>

                {/* Слайдер */}
                <div class="max-w-21xl mx-auto">

                <div id="default-carousel" class="relative" data-carousel="static">
                      {/* <!-- Carousel wrapper --> */}
                      <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                          {/* <!-- Item 1 --> */}
                          <div class="hidden duration-700 ease-in-out" data-carousel-item>
                              <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
                          </div>
                          {/* <!-- Item 2 --> */}
                          <div class="hidden duration-700 ease-in-out" data-carousel-item>
                              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
                          </div>
                          {/* <!-- Item 3 --> */}
                          <div class="hidden duration-700 ease-in-out" data-carousel-item>
                              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
                          </div>
                      </div>
                      {/* <!-- Slider indicators --> */}
                      <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                      </div>
                      {/* <!-- Slider controls --> */}
                      <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                          <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                              <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                              <span class="hidden">Previous</span>
                          </span>
                      </button>
                      <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                          <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                              <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                              <span class="hidden">Next</span>
                          </span>
                      </button>
                  </div>

                  {/* <p class="mt-5">This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn
                    more
                    by going to the official <a class="text-blue-600 hover:underline"
                      href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
                  </p>
                    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
                </div>

                <div className='Kokon-na-mazy'>
                {eventsElements}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;

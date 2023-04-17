import React from 'react';
import { useTranslation } from 'react-i18next';

import moment from 'moment/min/moment-with-locales';

const EventElement = ({ event }) => {
  const [t, i18n] = useTranslation('mainPage');
  const currentLang = localStorage.getItem('i18nextLng')

  const date = moment(event.event_start).locale(currentLang === 'ua' ? 'uk' : currentLang).format('D MMMM,HH:mm ddd').split(' ').map((i) => i[0].toUpperCase() + i.slice(1)).join(' ')
  const date2 = moment(event.event_start).locale(currentLang === 'ua' ? 'uk' : currentLang).format('D MMMM').split(' ').map((i) => i[0].toUpperCase() + i.slice(1)).join(' ')
  const city = event.city[currentLang];


  return (
    <div className="px-3 py-5 gap-8 snap-x   ">
        <div className="first-elem-div col-sm-4 flex-col rounded-[20px] bg-white-700 relative p-2 group relative w-full ">

        <div className="h-full w-full">
          <div className="w-full h-full ">
            <img className="rounded-[10px] " src="https://i1.sndcdn.com/avatars-000630927555-iux64b-t500x500.jpg" alt="" />
          </div>

          <div className="mb-3 flex items-center justify-between px-0 md:items-start">
            <div className="mb-3">
              <div className="bl1 flex pt-5">
                <p className="text-lg pl-3 font-semibold text-gray-700 md:text-1xl dark:text-dark-text-400"> {date}</p>
              </div>

              {/* name event */}
              <p className="name text-gray-700 mb-20 font-bold text-2xl   hover:text-gray-900 hover: dark:text-dark-text-100">{ event.title }</p>

              {/* <p className="text-lg font-bold text-navy-700"> Abstract Colors </p> */}
              <div className="nav nav-pills nav-justified px-2">
                <div className="location start flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-dark-text-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-l font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-dark-text-300">{ city }</p>
                </div>

                <div className="start flex px-1">
                  <p className="text-lg font-semibold text-xs sm:text-slate-900 md:text-1xl dark:text-dark-text-400">{t('eventCard.from')} { event.priceTicket }</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-elem-div rounded-[20px] absolute rounded w-full h-full 
          right-0 top-0 flex flex-col justify-between bg-gray-700 transition duration-700 translate-y-[120%]">

          <div className="mt-2 scale-10 text-white  outline-none ">
          </div>

          <div className=" scale-10 text-white outline-none  ">
            <p className="slider-event-data  ">{date2}</p>
          </div>

          <div className="scale-10 text-white outline-none">
            <p className="name text-wight-700 font-bold text-4xl mb-3 text-wight-900  dark:text-dark-text-200">{ event.title }</p>
          </div>

          <div className="mb-10 scale-10 text-white outline-none ">
            <p className="text-wight-700 text-lg text-white">{ city }</p>
            <div className="justify-between md:items-center lg:justify-between">
              <button onClick={() => { location.href = `/event/${event.id}` }} className="fa fa-shopping-cart p-2 pl-11 pr-11 
             bg-indigo-500 border-2 border-indigo-500 text-gray-100  text-lg rounded-lg 
              transition-colors duration-700 transform  ">
                { t('eventCard.buy') }
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EventElement;
import React from 'react';
import { useTranslation } from 'react-i18next';

import '../css/event-card.css';


const EventElement = ({ event }) => {
  const [t, i18n] = useTranslation('mainPage');

  return (
    <div className="px-3 py-5 gap-8 snap-x">
      <div className="col-sm-4 flex-col rounded-[20px] hover:bg-wh-700 bg-gray-0 p-2 rounded-lg group relative w-full dark:bg-dark-bg-800 dark:border-dark-bg-700 cursor-pointer">
        <div className="h-full w-full">
          <div className="w-full h-full">
            <img className="rounded-[10px]" src="https://i1.sndcdn.com/avatars-000630927555-iux64b-t500x500.jpg" alt="" />
          </div>

          <div className="mb-3 flex items-center justify-between px-0 md:items-start">
            <div className="mb-3">
              <div className="bl1 flex pt-5">
                <p className="text-lg pl-3 font-semibold text-gray-600 md:text-1xl dark:text-dark-text-400">14 квитня 18:00, ПТ</p>
              </div>

              {/* name event */}
              <p className="name text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer dark:text-dark-text-100">{event.title}</p>

              {/* <p className="text-lg font-bold text-navy-700"> Abstract Colors </p> */}
              <div className="nav nav-pills nav-justified px-2">
                <div className="location start flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-dark-text-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-l font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-dark-text-300">{event.city}</p>
                </div>

                <div className="start flex px-1">
                  <p className="text-lg font-semibold text-xs sm:text-slate-900 md:text-1xl dark:text-dark-text-400">{t('eventCard.from')} {event.priceTicket}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slider on ticket */}
        <div className="rounded-[20px] absolute bg-transparent rounded bg-opacity-0 hover:bg-opacity-80 bg-slate-500 w-full h-full right-0 top-0 hover:opacity-100 duration-700 transition flex flex-col justify-between">
          <div className="mt-2 hover:scale-10 text-white outline-none opacity-0 group-hover:opacity-100">
            {/* I will think something BLYAT */}
            <button className="button-rekomend-main p-4 rounded-full transition ease-in duration-200 focus:outline-none">
              <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6">
                <path fill="#FFFFFF" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>

          <div className="hover:scale-10 text-white outline-none opacity-0 group-hover:opacity-100">
            <a className="text-lg md:text-1xl">14 квитня</a>
          </div>

          <div className="hover:scale-10 text-white outline-none opacity-0 group-hover:opacity-100">
            <p className="name text-wight-700 font-bold text-2xl mb-3 hover:text-wight-900 hover:cursor-pointer dark:text-dark-text-200">{event.title}</p>
          </div>

          <div className="mb-10 hover:scale-10 text-white outline-none opacity-0 group-hover:opacity-100">
            <p className="text-wight-700 text-lg text-white">{event.city}</p>
            <div className="justify-between md:items-center lg:justify-between">
              <button onClick={() => { location.href = `/event/${event.id}` }} className="fa fa-shopping-cart p-2 pl-11 pr-11 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">
                {t('eventCard.buy')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventElement;

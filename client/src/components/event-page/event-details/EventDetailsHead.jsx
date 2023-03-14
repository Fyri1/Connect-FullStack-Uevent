import React from 'react';


const EventDetailsHead = ({ eventData }) => {
  return (
    <div>
      {/* Event name */}
      {/* mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white */}
      <h1 className="Event-name-div">{ eventData.title }</h1>

      {/* Location */}
      <div className="start flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <p className="pl-2">{ eventData.city }</p>
      </div>

      {/* Tickets amount */}
      <div className="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
        </svg>
        <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white">Tickets left: 1488</p>
      </div>
    </div>
  )
}

export default EventDetailsHead;

import React from 'react';

import '../css/event-card.css';


const EventElement = ({ event }) => {
  return (
    <div >
      <div className="col-sm-4">
        <div className=" product-image-wrapper" >
          <div className="single-products">

            <div className="productinfo text-center">
              <img src="/1.jpg" alt="" />
              <p className='name'>{event.title}</p>

            </div>

          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <div>
              <div className=" bl1 start flex   ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <a className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; {event.event_start}</a>
              </div>
                <div className=" bl1 start flex   ">
                  <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-0 text-slate-300">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 27 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>  
                  <p className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; 12:88</p>
                  {/* <p className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; - &nbsp;</p> */}
                </div>
              </div>
              <div className=" bl1 start flex   ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <a className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; {event.city} </a>
              </div>
              <div className=" bl1 start flex   ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>

                <a className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; {event.priceTicket} ₴ </a>
              </div>
            </ul>
            
              {/* button buy */}
              <div className=''>
                <a href={`/event/${event.id}`} className="">
                  {/* <i className=""></i>Buy Ticket */}
                  <button className="fa fa-shopping-cart p-2 pl-11 pr-11 
                  bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg 
                  transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 
                  focus:border-4 focus:border-indigo-300">Button</button>
                </a>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EventElement;

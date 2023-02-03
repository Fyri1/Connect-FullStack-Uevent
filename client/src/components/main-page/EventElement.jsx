import React from 'react';

import '../css/event-card.css';
// import MainItem from './MainItem.jsx';

const EventElement = ({ event }) => {
  return (
  <div>
    <div class="col-sm-4">
      <div class="product-image-wrapper">
        <div class="single-products">
          <div class="productinfo text-center">
            <img src="/1.jpg" alt="" />
            <h2>$56</h2>
            <p className='Name'>Kokon_name</p>

            {/* button buy */}
            <div className='button-buy'>
              <a href="/MainItem" class="">
                {/* <i class=""></i>Buy Ticket */}
                <button class=" fa fa-shopping-cart p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Button</button>
              </a>
            </div>

          </div>

        </div>
        <div class="choose">
            <ul class="nav nav-pills nav-justified">
                <div>
                  <div class=" bl1 start flex   ">
                    <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-0 text-slate-300">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 27 24" stroke="currentColor" stroke-width="2">
                      <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg> 
                    <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp;Time :<a>  12:88</a></a>
                    <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; - &nbsp;<a>16:88</a></a>
                  </div>
                </div>
              
              
                  <div class=" bl1 start flex   ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    
                    <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; Łwow </a>
                  </div>
                  <div class=" bl1 start flex   ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; Users: 69 </a>


                  </div>
                  
          
            </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EventElement;

import React from 'react';

import '../css/event-card.css';
// import MainItem from './MainItem.jsx';

const EventElement = ({ event }) => {
  return (
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
            <li>
              <a href="#">
                <i class="fa fa-mercury"></i>from 24 to 44
              </a>
            </li>
          
            <div class="  ">
              <div class=" bl1 start flex   ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                
                <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; Łwow </a>
              </div>
            
            </div>
                
             

          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventElement;

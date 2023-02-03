import React from 'react';

import '../css/event-card.css';
import MainItem from './MainItem.jsx';

const EventElement = ({ event }) => {
  return (
    <div class="col-sm-4">
      <div class="product-image-wrapper">
        <div class="single-products">
          <div class="productinfo text-center">
            <img src="/1.jpg" alt="" />
            <h2>$56</h2>
            <p className='Name'>Kokon_name</p>
          
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
            <li>
              <a href="#">
                <i class="fa fa-map-marker "></i>we Łwowie
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventElement;

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
              <a href="/MainItem" class="btn btn-default add-to-cart">
                <i class="fa fa-shopping-cart"></i>Buy Ticket
            
                
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

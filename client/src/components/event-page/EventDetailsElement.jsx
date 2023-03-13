import '../css/event-details-element.css'; 


import React from 'react';

const EventDetailsElement = ({ eventData }) => {
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

  return (
    
    <div className=''>

          
          <div class="sm:grid grid-cols-4 bg-white shadow-sm p-7  ">



            <div className='container'   >
              <div class="photo"><img src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Just a flower" class="w-full rounded-lg">
                </img>
              </div>
              <div class="circle">
                {/* колокольчик */}
                <button className="bell inline-block relative"> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
                </button>
              </div>
          
            </div>
            <div class="pt-5 sm:pt-0 sm:pl-10 col-span-3">
            <p class="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                  to cart</a>
              </div>
            </div>
          </div>


      <div onClick={unfoldButtonHandle} >
              <button className="button_block_view" type="submit">Развернуть</button>
      </div>
    </div>
  );
}

export default EventDetailsElement;

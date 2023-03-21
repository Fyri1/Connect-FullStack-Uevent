import React from 'react';

import '../../css/event-details-element.css'; 


const EventDetailsBody = ({ eventData }) => {
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
      <div className="sm:grid grid-cols-4 bg-white shadow-sm p-7">
        <div className="container">
          <div className="photo">
            <img src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Just a flower" className="w-full rounded-lg" />
          </div>

          <div className="circle">

            <button className="bell border-gray-400 top-3 right-3  rounded-full bg-white p-2  hover:cursor-pointer"> 
                <svg stroke="currentColor" fill="currentColor" 
                stroke-width="0" viewBox="0 0 512 512" height="1em"
                 width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                   d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08
                    96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 
                    183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path>
              </svg>
             
            </button>

          </div>
        </div>

        <div className="pt-5 sm:pt-0 sm:pl-10 col-span-3">
          <p className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
          </p>
            
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </a>
          </div>
        </div>
      </div>

      <div onClick={unfoldButtonHandle}>
        <button className="button_block_view" type="submit">Развернуть</button>
      </div>
    </div>
  );
}

export default EventDetailsBody;

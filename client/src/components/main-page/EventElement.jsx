import React from 'react';

import '../css/event-card.css';


const EventElement = ({ event }) => {
  return (
    <div >
      <div className="px-3 py-5 gap-8 snap-x  cursor-pointer  ">
       
        <div className="">
          <div className="col-sm-4  flex-col rounded-[20px]
            hover:bg-wh-700  bg-gray-0 p-2 rounded-lg group relative
            w-full !p-3 3xl:p-![18px] ">
              <div className="h-full w-full">
                
                  <div className=" w-full h-full "> 
                      {/* <img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png" class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/> */}
                      <img src="https://i1.sndcdn.com/avatars-000630927555-iux64b-t500x500.jpg" alt="" />
                      
                  </div>

                  <div className="mb-3 flex items-center justify-between px-2 md:items-start">
                      <div className="mb-3">
                        <a>&nbsp;</a>
                        <div className=" bl1 start flex ">
                         <a>&nbsp;</a>
                                {/* <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-0 text-slate-300">
                                  <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 27 24" stroke="currentColor" strokeWidth="2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>   */}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 
                              3v2.25M3 18.75V7.5a2.25 
                              2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 
                              2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 
                              2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 
                              15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 
                              2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 
                              2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                          </svg>
                          <a className="text-lg font-semibold  sm:text-slate-900 md:text-1xl " >&nbsp; 14 квитня 18:00, ПТ</a>
                              
                        </div>
                        {/* name event */}
                        <p className='name text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer'>{event.title}</p>

                        {/* <p class="text-lg font-bold text-navy-700"> Abstract Colors </p> */}
                        <ul className=" nav nav-pills nav-justified px-2">

                          <div className="location start flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <a className=" text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >{event.city} </a>
                          </div>
                          <div className=" start flex ">
                            <a className="text-lg font-semibold text-2xl sm:text-slate-900 md:text-1xl " >от {event.priceTicket} ₴ </a>
                          </div>
                        </ul>
                      </div>
                      

                  </div>
                  {/* <div className="justify-between md:items-center lg:justify-between ">

                    <div className='items-center'>
                      <a href={`/event/${event.id}`} className="">
                      
                        <button className="fa fa-shopping-cart p-2 pl-11 pr-11 
                        bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg 
                        transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 
                        focus:border-4 focus:border-indigo-300">Button</button>
                      </a>

                      </div>     
                  </div>          */}
              </div>
              {/* slider on ticket */}
              <div class=" absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 
                w-full h-full right-0 top-0   
                group-hover:opacity-100 duration-700 transition flex flex-col justify-between">
                <div  class=" mt-5 hover:scale-10 text-white outline-none opacity-0
                  group-hover:opacity-100 ">
                    {/* I will think something BLYAT */}
                  <button class="button-rekomend-main p-4 rounded-full transition ease-in duration-200 focus:outline-none">
                  <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6">
                      <path fill="#FFFFFF" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  </button>
                </div>
                <div  class="  hover:scale-10 text-white outline-none opacity-0
                  group-hover:opacity-100 ">
                  <a className="text-lg   md:text-1xl " > 14 квитня</a>
                </div>

                <div  class="hover:scale-10 text-white outline-none opacity-0
                  group-hover:opacity-100 ">
                  <p className='name text-wight-700 font-bold text-2xl mb-3 hover:text-wight-900 hover:cursor-pointer'>{event.title}</p>
                </div>

                <div class="mb-10 hover:scale-10 text-white outline-none opacity-0
                  group-hover:opacity-100  ">
                  <p className=' text-wight-700    text-lg  text-white '>{event.city}</p>
                  <div className=" justify-between md:items-center lg:justify-between ">
                    <div className='items-center'>
                      <a href={`/event/${event.id}`} className="">
                        <button className=" fa fa-shopping-cart p-2 pl-11 pr-11 
                        bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg 
                        transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 
                        focus:border-4 focus:border-indigo-300">КУПЫТЫ</button>
                      </a>
                      </div>     
                  </div>         
                </div>
                
              </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default EventElement;

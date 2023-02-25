import React from "react";
<link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"/>;
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"/>


import '../css/event-card.css';


const MainItem = () => {
  return (
    
<div сlass=" main-div-MainItem py-6 px-4 sm:p-6 md:py-10 md:px-8">

    <div class="info-ticket-div max-w-4xl mx-auto grid grid-cols-1 lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2">
      
      <div class="relative p-3 col-start-1 row-start-1  rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
        
        <div class="followin-button ">
        <button class="inline-block relative"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
        </button>
        </div>
        <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Ticket to Poland </h1>
      </div>
      {/* Основная часть */}
      <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2
        lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
        <h4 class="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">Prise:<a>  56$</a></h4>
        <p>&nbsp;</p>
        <button type="button" class="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button>
      </div>
      <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
        ЭBilety na spektakle naszego teatru można również kupić w kasie znajdującej się w budynku teatru. 
        Kasa czynna codziennie od 10.00 do 20.00, przerwa od 14.00 do 14.30, przerwy techniczne od 12:00 do 12:15, od 17:00 do 17:15.
        Kiosk biletowy teatru działa na Ekobazaar-Mytishchi pod adresem: Veteranov blvd., 6
        Bilety można rezerwować wcześniej telefonicznie. +7 (495) 582-81-81.
        Kasa teatru akceptuje zarówno gotówkę, jak i karty kredytowe.
      </p> 
      <div class="col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2  lg:row-span-6 lg:mb-0">

        {/* start biographies  */}
        {/* <div class='flex items-center justify-center min-h-screen from-pink-200 via-purple-300 to-blue-500 bg-gradient-to-br'>
            <div class='w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'>
                <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                    <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
                        <figure class="w-1/2 md:w-full  rounded-full overflow-hidden">
                            <img src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=600" alt="woman wearing a headwrap and an Africa-shaped earring while smiling"></img>
                        </figure>
                    </div>
                    <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                        <div class="flex flex-col justify-center">
                            <h1 class="text-center md:text-left text-2xl font-bold text-gray-900">Justine Howell</h1>
                            <p class="inline text-gray-700 font-normal leading-6 w-full text-base">UX Researcher, Co-host of the Interesting Design podcast
                                and a proud mother of three children</p>
                        </div>
                        <ul class="space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center">
                            <li class="text-sm"><i class="iconoir-pin-alt mr-2"></i>NYC</li>
                            <li class="text-sm"><i class="iconoir-calendar mr-2"></i>Member since 2019 </li>
                        </ul>

                        <ul class="space-x-4 flex flex-row justify-center w-full mb-4">
                            <li class="text-sm text-gray-800"><strong class="text-gray-900">10.9k</strong> Followers</li>
                            <li class="text-sm text-gray-800"><strong class="text-gray-900">100</strong> Following</li>
                        </ul>
                        <button class="transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </div> */}

        {/* end biographies  */}
      </div>
      <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">

        {/* Количество и иконка */}
        <div class="text-indigo-600 flex items-center dark:text-indigo-400">
          <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-0 text-slate-300">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white"> 
          &nbsp; Tickets left:<a>  1488</a>
          </a>
        </div>

        {/* Место положение */}
        <div class="flex items-center ">

        </div>

      </dl>

      {/* то что идет после описания */}
      <div class=" mt-5 text-xs font-medium  items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-5">

        {/* иконка локации */}
        <div class=" bl1 start flex   ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; Łwow </a>
        </div>
        <a>&nbsp;</a>
        {/* Start  time*/}
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
          
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; Time :<a>  12:88</a></a>
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; - &nbsp;<a>16:88</a></a>
        </div>
        {/* END  */}
        {/* <div class="end flex items-center">
          <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-0 text-slate-300">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >END :<a>  14:88</a></a>
        </div> */}
      </div>
  </div>
  {/* Start recommend */}
  <div className="recommend ">
    <h1 class=" text-center  bg-white rounded-md  py-5 max-w-2xl mx-auto text-2xl font-bold text-gray-500  ">RECOMMEND</h1>
    
       {/* class="py-3 bg-gray-100  это был приятный фон */}
      <section >
      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Итемы рекомендаций Думаю просто на похуе можно выгружать 4 штуки ( если выгружать больше то будут вторй строкой)  */}
        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src="https://i.imgur.com/GIeyjWd.jpg" alt="Hotel Photo" />
              <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <button class="text-sm">Add to cart</button>
              </div>
            </div>

            <div class="mt-1 p-2">
              <h2 class="text-slate-700">Adobe Photoshop CC 2022</h2>
              <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>
              <div class="mt-3 flex items-end justify-between">
                <p>
                  <span class="text-lg font-bold text-blue-500">$850</span>
                  <span class="text-sm text-slate-400">/night</span>
                </p>
                <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <button class="text-sm">Add to cart</button>
                </div>
              </div>
            </div>
          </a>
        </article>
        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src="https://i.imgur.com/GIeyjWd.jpg" alt="Hotel Photo" />
              <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <button class="text-sm">Add to cart</button>
              </div>
            </div>
            <div class="mt-1 p-2">
              <h2 class="text-slate-700">Adobe Photoshop CC 2022</h2>
              <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

              <div class="mt-3 flex items-end justify-between">
                <p>
                  <span class="text-lg font-bold text-blue-500">$850</span>
                  <span class="text-sm text-slate-400">/night</span>
                </p>
                <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <button class="text-sm">Add to cart</button>
                </div>
              </div>
            </div>
          </a>
        </article>
        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src="https://i.imgur.com/GIeyjWd.jpg" alt="Hotel Photo" />
              <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <button class="text-sm">Add to cart</button>
              </div>
            </div>
            <div class="mt-1 p-2">
              <h2 class="text-slate-700">Adobe Photoshop CC 2022</h2>
              <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>
              <div class="mt-3 flex items-end justify-between">
                <p>
                  <span class="text-lg font-bold text-blue-500">$850</span>
                  <span class="text-sm text-slate-400">/night</span>
                </p>
                <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <button class="text-sm">Add to cart</button>
                </div>
              </div>
            </div>
          </a>
        </article>
        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src="https://i.imgur.com/GIeyjWd.jpg" alt="Hotel Photo" />
              <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <button class="text-sm">Add to cart</button>
              </div>
            </div>

            <div class="mt-1 p-2">
              <h2 class="text-slate-700">Adobe Photoshop CC 2022</h2>
              <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

              <div class="mt-3 flex items-end justify-between">
                <p>
                  <span class="text-lg font-bold text-blue-500">$850</span>
                  <span class="text-sm text-slate-400">/night</span>
                </p>

                <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <button class="text-sm">Add to cart</button>
                </div>
              </div>
            </div>
          </a>
        </article>
        
      </div>
    </section>
  </div>

  {/* начало Комментариев */}
  <div class="comment">   {/* отвечате за цвет*/}
    <div class="flex justify-center  min-h-screen">
      <div class="h-80 px-7 w-[700px] rounded-[12px] bg-white p-4 shadow-md border">
          <p class="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
              Add Comment
          </p> 
          <textarea class="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here"></textarea>  
          
          <div class="flex justify-between mt-2"> 
              <p class="text-sm text-blue-900 ">Enter atleast 15 characters</p>
              <button class="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">
                  Submit comment
              </button>
          </div>   
      </div>   
    </div>
  </div>

</div>
  );
}

export default MainItem;

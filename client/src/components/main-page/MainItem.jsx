import React from "react";
<link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"/>;
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"/>


import '../css/event-card.css';


const MainItem = () => {
  return (
    
<div сlass=" main-div-MainItem py-6 px-4 sm:p-6 md:py-10 md:px-8">

    <div class="info-ticket-div max-w-4xl mx-auto  lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2">
      
      <div class="lin2">
        
        <div class="followin-button ">
        <button class="inline-block relative"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
        </button>
        </div>
        <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Ticket to Poland </h1>
        {/* иконка локации */}
        <div class=" bl1 start flex   ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >&nbsp; Łwow </a>
        </div>
        <a>&nbsp;</a>
         {/* start biographies  */}

          <div className='back-fon-biographies'>
            <div class="lin2 md:flex shadow-lg  mx-4 max-w-lg md:max-w-2xl h-64">
              <img class=" object-cover rounded-lg rounded-r-none pb-5/6" src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"/>
              <div class="px-4 py-4 bg-white rounded-lg">

                  <p class=" text-sm text-gray-700 mt-4">
                    Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam 
                    reiciendis numquam tempore commodi ipsa suscipit laboriosam, 
                    sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam
                    tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
                  </p>
                  <div class="time-info-div">
                    <div className='time2'>
                      <a className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" > </a>
                    </div>
                  </div>
                  <div class="flex items-center justify-end mt-4 top-auto">
                    
                  </div>
                  <div class="flex items-center justify-end mt-4 top-auto">
  
                    <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">РАЗВЕРНУть</button>

                  </div>
              </div>
              
            </div>
          </div>
          

      {/* end biographies  */}
      <div class="">
          <div class="shadow overflow-hidden rounded border-b border-gray-200">
            <table class="min-w-full bg-white">
              <thead class="bg-blue-800 text-white">
                <tr>
                  <th class="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">Когда?</th>
                  <th class="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">Где?</th>
                  <th class="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">Prise</th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
          
                </tr>
              </thead>
            <tbody class="text-gray-700">
              <tr>
                <td class="w-1/3 text-left py-3 px-4">17.03.2023</td>
                <td class="w-1/3 text-left py-3 px-4">Hamburg
                  Barclaycard Arena, Sylvesterallee 10, 22525</td>
                <td class="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
                <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662"><button type="button" class="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button></a></td>
              </tr>
              <tr class="bg-gray-100">
                <td class="w-1/3 text-left py-3 px-4">17.03.2023</td>
                <td class="w-1/3 text-left py-3 px-4">Hamburg
                  Barclaycard Arena, Sylvesterallee 10, 22525</td>
                <td class="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
                <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662"><button type="button" class="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button></a></td>
              </tr>
              <tr>
                <td class="w-1/3 text-left py-3 px-4">17.03.2023</td>
                <td class="w-1/3 text-left py-3 px-4">Hamburg
                Barclaycard Arena, Sylvesterallee 10, 22525</td>
                <td class="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
                <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662"><button type="button" class="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button></a></td>
              </tr>

            </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Основная часть */}
      <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2
        lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
        <h4 class="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">Prise:<a>  56$</a></h4>
        <p>&nbsp;</p>
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



      </dl>

      {/* то что идет после описания */}
      <div class=" mt-5 text-xs font-medium  items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-5">


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
  {/* <div className="recommend ">
    <h1 class=" text-center  bg-white rounded-md  py-5 max-w-2xl mx-auto text-2xl font-bold text-gray-500  ">RECOMMEND</h1>
    
      <section >
      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
  </div> */}

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

import React from "react";

import '../css/event-card.css';


const MainItem = () => {
  return (
    
<div сlass="py-6 px-4 sm:p-6 md:py-10 md:px-8">
    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
        <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Ticket to Poland</h1>
        {/* <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Весь дом</p> */}
      </div>
      <div class="col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2  lg:row-span-6 lg:mb-0">

        {/* start biographies  */}
        <div class='flex items-center justify-center min-h-screen from-gray-500 via-blue-300 to-blue-800 bg-gradient-to-br'>
          <div class="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
            <div class="pb-6">
              <div class="flex flex-wrap justify-center">
                <div class="flex justify-center w-full">
                  <div class="relative">
                    <img src="https://source.unsplash.com/jmURdhtm7Ng/120x120" class="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                  </div>
                </div>
              </div>

              <div class="mt-2 mt-20 text-center">
                <h3 class="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Ariel Cerda</h3>
                <div class="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                  <div class="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">Diseñador UI / Front-end</div>
                </div>
                <div class="w-full text-center">
                  <div class="flex justify-center pt-8 pb-0 lg:pt-4">
                    <div class="flex space-x-2">
                      <a
                      class="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                      href="https://www.twitter.com/smilesharks"
                      rel="noopener"
                      aria-label="Ariel Cerda on Twitter"
                      target="_blank"
                      >
                        <svg class="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>

                      <a class="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary" href="https://www.github.com/Smilesharks" rel="noopener" aria-label="Ariel Cerda on Github" target="_blank">
                        <svg class="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140">
                          <path d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"></path>
                        </svg>
                      </a>

                      <a
                      class="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                      href="https://www.linkedin.com/in/arielcerdahernandez/"
                      rel="noopener"
                      aria-label="Ariel Cerda on Linkedin"
                      target="_blank"
                      >
                        <svg class="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140">
                          <path d="M23.4 44.59h-4.75a12.76 12.76 0 00-9.73 2.19 9.44 9.44 0 00-2.35 7.12V131a9.08 9.08 0 002.3 7 9.24 9.24 0 006.82 2c2.22 0 4.15-.21 8.24-.06a12 12 0 009.25-2 9.1 9.1 0 002.29-7V53.9a9.44 9.44 0 00-2.34-7.12 12.68 12.68 0 00-9.73-2.19zM21 0A16.19 16.19 0 005.09 15.6 16.52 16.52 0 0021 31.86 16.12 16.12 0 0037 15.6 16.18 16.18 0 0021 0zM99.74 43.63a31.09 31.09 0 00-20.93 6.3A7.25 7.25 0 0077 46.34a6.08 6.08 0 00-4.52-1.78 119.08 119.08 0 00-15 .3c-4.16.84-6.18 3.79-6.18 9V131a9.14 9.14 0 002.28 7 12.06 12.06 0 009.26 2c4.47-.17 5.74.06 8.22.06a9.26 9.26 0 006.83-2 9.12 9.12 0 002.3-7V89.88A12.48 12.48 0 0192.93 76 12.44 12.44 0 01106 89.88V131a9.1 9.1 0 002.29 7 12 12 0 009.24 2c1.83-.07 4-.07 5.8 0a12.09 12.09 0 009.26-2 9.14 9.14 0 002.28-7V78.32a33.07 33.07 0 00-35.13-34.69z"></path>
                        </svg>
                      </a>

                      <a
                      class="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                      href="https://www.instagram.com/smilesharks"
                      rel="noopener"
                      aria-label="Ariel Cerda on Instagram"
                      target="_blank"
                      >
                        <svg class="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                          <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M73.1735 2C89.9405 2 92.3831 2.0897 99.4487 2.414C106.79 2.7521 111.807 3.9182 116.195 5.6225C120.801 7.35353 124.973 10.0686 128.422 13.5782C131.931 17.0266 134.646 21.1993 136.378 25.805C138.082 30.1934 139.248 35.2097 139.586 42.5513C139.917 49.9136 140 52.2596 140 71V71.552C140 89.7887 139.917 92.1623 139.586 99.4487C139.248 106.79 138.082 111.807 136.378 116.195C134.646 120.801 131.931 124.973 128.422 128.422C124.973 131.931 120.801 134.646 116.195 136.378C111.807 138.082 106.79 139.248 99.4487 139.586C92.0864 139.917 89.7404 140 71 140H70.448C52.2113 140 49.8377 139.917 42.5513 139.586C35.2097 139.248 30.1934 138.082 25.805 136.378C21.1993 134.646 17.0266 131.931 13.5782 128.422C10.0686 124.973 7.35353 120.801 5.6225 116.195C3.9182 111.807 2.7521 106.79 2.414 99.4487C2.0897 92.3831 2 89.9336 2 73.1735V68.8265C2 52.0595 2.0897 49.6169 2.414 42.5513C2.7521 35.2097 3.9182 30.1934 5.6225 25.805C7.35353 21.1993 10.0686 17.0266 13.5782 13.5782C17.0266 10.0686 21.1993 7.35353 25.805 5.6225C30.1934 3.9182 35.2097 2.7521 42.5513 2.414C49.6169 2.0897 52.0664 2 68.8265 2H73.1735V2ZM72.6146 14.4338H69.3854C52.439 14.4338 50.1758 14.5097 43.1171 14.834C36.3896 15.1445 32.7395 16.2623 30.3038 17.2076C27.0815 18.4634 24.7838 19.9538 22.3688 22.3688C19.9538 24.7838 18.4634 27.0815 17.2076 30.3038C16.2623 32.7395 15.1376 36.3896 14.834 43.1171C14.5097 50.1758 14.4338 52.439 14.4338 69.3854V72.6146C14.4338 89.561 14.5097 91.8242 14.834 98.8829C15.1445 105.61 16.2623 109.261 17.2076 111.696C18.4634 114.912 19.9607 117.216 22.3688 119.631C24.7838 122.046 27.0815 123.537 30.3038 124.792C32.7395 125.738 36.3896 126.862 43.1171 127.166C50.3897 127.497 52.5701 127.566 71 127.566H71.552C89.4713 127.566 91.6793 127.497 98.876 127.166C105.61 126.855 109.261 125.738 111.696 124.792C114.912 123.537 117.216 122.046 119.631 119.631C122.046 117.216 123.537 114.919 124.792 111.696C125.738 109.261 126.862 105.61 127.166 98.8829C127.497 91.6034 127.566 89.4299 127.566 71V70.448C127.566 52.5287 127.497 50.3207 127.166 43.124C126.855 36.3896 125.738 32.7395 124.792 30.3038C123.687 27.3062 121.923 24.5947 119.631 22.3688C117.405 20.077 114.694 18.3134 111.696 17.2076C109.261 16.2623 105.61 15.1376 98.8829 14.834C91.8242 14.5097 89.561 14.4338 72.6146 14.4338ZM71 35.5685C75.6529 35.5685 80.2603 36.485 84.559 38.2656C88.8578 40.0462 92.7637 42.656 96.0539 45.9461C99.344 49.2363 101.954 53.1422 103.734 57.441C105.515 61.7397 106.432 66.3471 106.432 71C106.432 75.6529 105.515 80.2603 103.734 84.559C101.954 88.8578 99.344 92.7637 96.0539 96.0539C92.7637 99.344 88.8578 101.954 84.559 103.734C80.2603 105.515 75.6529 106.432 71 106.432C61.603 106.432 52.5908 102.699 45.9461 96.0539C39.3015 89.4092 35.5685 80.397 35.5685 71C35.5685 61.603 39.3015 52.5908 45.9461 45.9461C52.5908 39.3015 61.603 35.5685 71 35.5685V35.5685ZM71 48.0023C64.9006 48.0023 59.0511 50.4253 54.7382 54.7382C50.4253 59.0511 48.0023 64.9006 48.0023 71C48.0023 77.0994 50.4253 82.9489 54.7382 87.2618C59.0511 91.5747 64.9006 93.9977 71 93.9977C77.0994 93.9977 82.9489 91.5747 87.2618 87.2618C91.5747 82.9489 93.9977 77.0994 93.9977 71C93.9977 64.9006 91.5747 59.0511 87.2618 54.7382C82.9489 50.4253 77.0994 48.0023 71 48.0023V48.0023ZM107.832 25.8878C110.028 25.8878 112.134 26.7602 113.687 28.313C115.24 29.8658 116.112 31.9718 116.112 34.1678C116.112 36.3638 115.24 38.4698 113.687 40.0226C112.134 41.5754 110.028 42.4478 107.832 42.4478C105.636 42.4478 103.53 41.5754 101.977 40.0226C100.425 38.4698 99.5522 36.3638 99.5522 34.1678C99.5522 31.9718 100.425 29.8658 101.977 28.313C103.53 26.7602 105.636 25.8878 107.832 25.8878Z"
                          ></path>
                        </svg>
                      </a>

                      <a
                      class="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                      href="https://www.youtube.com/channel/UCWip2TrjNMXb0kg6LWbsNzw?sub_confirmation=1"
                      rel="noopener"
                      aria-label="Ariel Cerda on Youtube"
                      target="_blank"
                      >
                        <svg class="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140">
                          <path
                              d="M115 15H25A25 25 0 000 40v60a25 25 0 0025 25h90a25 25 0 0025-25V40a25 25 0 00-25-25zM95.71 76.25L63.58 94.1A7.15 7.15 0 0153 87.85v-35.7a7.15 7.15 0 0110.6-6.26l32.11 17.86a7.15 7.15 0 010 12.5z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-6">
                    <p class="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis orci, maximus sed purus a, cursus scelerisque purus. Morbi molestie, odio at sagittis rhoncus, felis massa iaculis mi, quis molestie erat ipsum vel risus.
                    </p>
                    <button type="button" class="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Learn More</button>
                  </div>
                </div>
              </div>
              <div class="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                <div class="absolute flex -space-x-12 rounded-b-2xl">
                  <div class="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                  <div class="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                  <div class="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                  <div class="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                  <div class="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end biographies  */}
      </div>
      <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
        <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
          <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-0 text-slate-300">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >Сколько:<a>  1488</a></a>
        </dd>
        <dt class="sr-only">Место расположения</dt>
        <dd class="flex items-center">
          <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
            <circle cx="1" cy="1" r="1" />
          </svg>
          {/* иконка локации */}
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >Łwow</a>
        </dd>
      </dl>
      {/* то что идет после описания */}
      <div class="mt-5 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-5">
        {/* Start  time*/}
        <dd class="start flex items-center">
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
          <a class="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" >Start :<a>  14:88</a></a>
        </dd>
        {/* END  */}
        <div class="end flex items-center">
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
        </div>
      </div>
    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <h4 class="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">Prise:<a>  56$</a></h4>
      <button type="button" class="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button>
    </div>
    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
      Этот солнечный и просторный номер предназначен для тех, кто путешествует налегке и ищет удобное и уютное место, чтобы прилечь на ночь или две. Этот пляжный дом расположен в оживленном районе со множеством кафе, пабов, ресторанов и супермаркетов, недалеко от всех основных достопримечательностей, таких как Эдинбургский замок и Артурс-Сит.
    </p>  

  </div>
  {/* Start recommend */}
  <div>
    <div class="max-w-2xl mx-auto">
      <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image"></img>
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">Apple Watch Series 7
            GPS, Aluminium Case, Starlight Sport</h3>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>  
            </svg>
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default MainItem;

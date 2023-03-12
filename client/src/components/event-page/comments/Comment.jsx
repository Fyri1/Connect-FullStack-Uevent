import React from 'react';
import moment from  'moment';
import { useUser } from '../../../../hooks/user/useUser.js'
import apiClientRoutes from '../../../routes/api/apiClientRoutes.js';
import default_avatar from '../../../temp/avatar.png';

const Comment = ({ data }) => {
  const datePublish = moment(new Date(data.created_at), "YYYYMMDD").fromNow();
  const { isLoading, user } = useUser(data.user_id);
  console.log(user);
  return isLoading ? <></> : (
    // ГЕРМАН ИДИ НАХЙ Я СТАРАЛСя!
    <div className="rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
      <div class="flex items-center space-x-2">
          {/* аватарка юзера */}
          <div class="flex flex-shrink-0 self-start cursor-pointer">
            <img
            className="h-9 w-9 object-fill rounded-full"
            src={ !user['picture'] ? default_avatar : apiClientRoutes.getPathAvatar(user['picture'])}
            alt=""
          />
          </div>
          {/* основной блок комента */}
          <div class="flex items-center justify-center space-x-3">
            <div class="block">
              <div class="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                {/* имя юзера и время */}
                <div class="font-medium">
                  <div className="">
                    <div className="text-sm font-semibold">
                      {!user['first_name'] ? user.login : `${user['first_name']} ${user['second_name']}`} • <span className="font-normal">{datePublish}</span>
                    </div>
                  </div>
                </div>
                {/* контекст комента */}
                <div class="">
                  <p className=" mt-2 text-sm text-gray-600 md:text-base ">{data.content}</p>
                </div>
              </div>

              <div class="flex justify-start items-center text-xs w-full">
                <div class="font-semibold text-gray-700 px-3 flex items-center justify-center space-x-1">
                  <div className="flex">
                    {/* Like */}
                    <div className="card-block">
                      <button className="items-center justify-center text-2xl text-white mt-4 ">
                        {/*                       
                        <div
                          class="bg-green-500 shadow-lg shadow- shadow-green-600 
                          text-white cursor-pointer px-3 text-center justify-center 
                          items-center py-1 rounded-xl flex space-x-2 flex-row">
                          <svg stroke="currentColor" fill="currentColor" 
                            stroke-width="0" viewBox="0 0 1024 1024" class="text-xl" 
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z">
                              </path>
                          </svg>
                          <span>23</span>
                        </div> 
                        */}
                        <div class="mx-1 px-3 py-2  py-1 items-center rounded-xl flex space-x-2 flex-row bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-green-200 rounded-lg ">
                        <svg
                            className="h-5 w-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                          >
                          </path>
                        </svg>
                          <p className="justify-between py-1 text-sm ">23</p>
                        </div>
                      </button>
       
                    </div>
                    {/* UnLike */}
                    <div className="card-block">
                      <button className="items-center justify-center text-2xl text-white mt-4">
                        <div class="mx-1 px-3 py-2  py-1 items-center rounded-xl flex space-x-2 flex-row bg-gray-200 text-gray-700 hover:bg-red-400 hover:text-red-200 rounded-lg ">

                        <svg
                          className="h-5 w-5 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                          >
                          </path>
                        </svg>
                        <p className="justify-between py-1 text-sm ">23</p>
                        </div>
                        
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* крестик на коментарии */}
          <div class="self-stretch  justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
          </div>

      </div>
    </div>

      // то что было раньше 
      /* <div className="rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <div className="flex justify-between items-center">
          <img
            className="w-12 h-12 rounded-full"
            src={ !user['picture'] ? default_avatar : apiClientRoutes.getPathAvatar(user['picture'])}
            alt=""
          />
          <div className="">
            <div className="text-sm font-semibold">
              {!user['first_name'] ? user.login : `${user['first_name']} ${user['second_name']}`} • <span className="font-normal">{datePublish}</span>
            </div>
          </div>


        </div>
        <div className="mt-4">
          <p className="mt-4 text-md text-gray-600">{data.content}</p>
        </div>

        <div className="flex">
          <div className="card-block">
            <button className="p-1 flex rounded-full items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer inline-block relative">
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="card-block">
            <button className="p-1 flex rounded-full items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer inline-block relative">
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        
      </div> */
 
  );
};

export default Comment
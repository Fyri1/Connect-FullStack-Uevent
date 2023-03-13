import React from 'react';
import moment from  'moment';
import { useUser } from '../../../../hooks/user/useUser.js'
import apiClientRoutes from '../../../routes/api/apiClientRoutes.js';
import default_avatar from '../../../temp/avatar.png';
import $api from '../../../../utils/api.js';

const Comment = ({ data }) => {
  const datePublish = moment(new Date(data.created_at), "YYYYMMDD").fromNow();
  const { isLoading, user } = useUser(data.user_id);
  const [show, setShow] = React.useState(false);
  const [content, setContent] = React.useState(data.content)

  const handelForm = (e) => {
    e.preventDefault();
    $api.patch()
  }

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
                    <div className="card-block">
                    <button className={`flex p-1.5 mr-2 transition-all duration-300  "rounded-3xl bg-blue-500 text-white hover:bg-blue-600" : "rounded hover:bg-gray-200 text-blue-600"}`}>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" >
                       
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /> :
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                     
                      </svg>
                    </button>

                    {/* ДЛЯ ТИМОФЕЯ */} {/* ДЛЯ ТИМОФЕЯ */} {/* ДЛЯ ТИМОФЕЯ */}
                    {/* <button onClick={ editActive ? saveButtonHandle : editButtonHandle } className={`flex p-1.5 mr-2 transition-all duration-300 ${editActive ? "rounded-3xl bg-blue-500 text-white hover:bg-blue-600" : "rounded hover:bg-gray-200 text-blue-600"}`}>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" >
                        {
                          editActive ?
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /> :
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        }
                      </svg>
                    </button> */}

                    {/* Моя кнопка */}
                      {/* <button className="items-center justify-center text-2xl text-white mt-4">
                        <div class="mx-1 px-3 py-2 
                        py-2 items-center rounded-xl flex
                        space-x-2 flex-row bg-gray-200 text-gray-700
                        hover:bg-blue-400 hover:text-blue-200 rounded-lg ">
                       
                        <svg className="h-5 w-5 text-gray-700" ffill="none" strokeWidth="1.5"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round"
                            strokeLinejoin="round" 
                            d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>
                          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path>
                        </svg>

                      
                        </div>
                        
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handelForm}>
        <div className="mt-4">
          { show ? 
            <textarea onChange={(e) => setContent(e.target.value)} value={content} className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here" />
            : <p className="mt-4 text-md text-gray-600">{content}</p> 
          }
        </div>

        <div className="flex justify-between items-end">
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
          {show ?
          <div className="flex">
          <button onClick={() => setShow(!show)} className="px-3 py-1 bg-blue-600 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-500">Change</button>
          <button onClick={() => setShow(!show)} className="px-3 py-1 bg-blue-600 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-500">Cancel</button>
          </div>
          :
          <button onClick={() => setShow(!show)} className="px-3 py-1 bg-blue-600 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-500">Edit</button>
          }
        </div>
        </form>
      </div>


 
  );
};

export default Comment
import React from 'react';
import moment from 'moment';

import ReactionElement from './ReactionElement.jsx';

import $api from '../../../../utils/api.js';
import apiClientRoutes from '../../../routes/api/apiClientRoutes.js';
import { useUser } from '../../../../hooks/user/useUser.js'

import default_avatar from '../../../temp/avatar.png';


const Comment = ({ data }) => {
  const datePublish = moment(new Date(data.created_at), "YYYYMMDD").fromNow();
  const { isLoading, user } = useUser(data.user_id);
  const [show, setShow] = React.useState(false);
  const [content, setContent] = React.useState(data.content);

  const likeButtonClickHandle = () => {
    console.log("pidoras clicked like!");
  }

  const dislikeButtonClickHandle = () => {
    console.log("pidoras clicked dislike!");
  }

  const handleForm = (e) => {
    e.preventDefault();
    $api.patch()
  }


  return isLoading ? <></> : (
    <div className="items-center ml-[22%] mr-[22%] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500">
      <div className="flex items-center space-x-2">
        {/* User ava */}
        <div className="flex flex-shrink-0 self-start cursor-pointer">
          <img className="h-9 w-9 object-fill rounded-full" src={ !user['picture'] ? default_avatar : apiClientRoutes.getPathAvatar(user['picture'])} alt="" />
        </div>

        <div className="flex items-center justify-center w-full space-x-3">
          <div className="block w-full">
            <div className="bg-gray-100 w-full rounded px-2 pb-2 pt-1">
              <div className="flex text-sm font-semibold">
                <span className="font-bold">{!user['first_name'] ? user.login : `${user['first_name']} ${user['second_name']}`}</span>
                <span className="font-normal pl-1"> • {datePublish}</span>

                <button className={`flex p-1.5 mr-2 transition-all duration-300 rounded-3xl text-gray-400 hover:bg-gray-200`}>
                  <svg className="h-2.5 w-2.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
                  </svg>
                </button>
              </div>

              <div className="">
                <p className="text-sm text-gray-600 md:text-base ">{data.content}</p>
              </div>

              <div className="flex">
                <ReactionElement reactionClickHandle={likeButtonClickHandle} isActive={true} reactionAmount={23}>
                  <path d="M2 42h8V18H2v24zm44-22c0-2.21-1.79-4-4-4H29.37l1.91-9.14c.04-.2.07-.41.07-.63 0-.83-.34-1.58-.88-2.12L28.34 2 15.17 15.17C14.45 15.9 14 16.9 14 18v20c0 2.21 1.79 4 4 4h18c1.66 0 3.08-1.01 3.68-2.44l6.03-14.1A4 4 0 0 0 46 24v-3.83l-.02-.02L46 20z"/>
                </ReactionElement>

                <ReactionElement reactionClickHandle={dislikeButtonClickHandle} isActive={false} reactionAmount={23}>
                  <path d="M30 6H12c-1.66 0-3.08 1.01-3.68 2.44l-6.03 14.1A4 4 0 0 0 2 24v3.83l.02.02L2 28c0 2.21 1.79 4 4 4h12.63l-1.91 9.14c-.04.2-.07.41-.07.63 0 .83.34 1.58.88 2.12L19.66 46l13.17-13.17C33.55 32.1 34 31.1 34 30V10c0-2.21-1.79-4-4-4zm8 0v24h8V6h-8z"/>
                </ReactionElement>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleForm}>
        <div className="mt-4">
          {
            show ? (
              <textarea onChange={(e) => setContent(e.target.value)} value={content} className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here" />
            ) : ( 
              <p className="mt-4 text-md text-gray-600">{data.content}</p>
            )
          }
        </div>

        <div className="flex justify-between items-end">
          {
            show ? (
              <div className="flex">
                <button onClick={() => setShow(!show)} className="px-3 py-1 bg-blue-600 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-500">Change</button>
                <button onClick={() => { setShow(!show), setContent(data.content) }} className="px-3 py-1 bg-blue-600 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-500">Cancel</button>
              </div>
            ) : (
              <button onClick={() => setShow(!show)} className="px-3 py-1 bg-blue-600 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-500">Edit</button>
            )
          }
        </div>
      </form>
    </div>
  );
};

export default Comment
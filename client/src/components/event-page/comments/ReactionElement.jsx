import React from 'react';


const ReactionElement = ({ reactionClickHandle, reactionAmount, children }) => {
  return (
    <div className="card-block">
      <button onClick={ reactionClickHandle } className="items-center justify-center text-2xl text-white mt-4">
        <div className="mx-1 px-3 py-1 items-center rounded-xl flex space-x-2 flex-row bg-gray-200 text-gray-700 rounded-lg">
          <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            { children }
          </svg>

          <p className="justify-between py-1 text-sm">{ reactionAmount }</p>
        </div>
      </button>
    </div>
  )
}

export default ReactionElement;

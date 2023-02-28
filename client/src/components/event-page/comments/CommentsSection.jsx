import React from 'react';


const CommentsSection = () => {
  // Hачало Комментариев
  return (
    <div className="comment"> {/* отвечает за цвет*/}
      <div className="flex justify-center  min-h-screen">
        <div className="h-80 px-7 w-[700px] rounded-[12px] bg-white p-4 shadow-md border">
          <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">Add Comment</p>
          <textarea className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here"></textarea>
          <div className="flex justify-between mt-2"> 
            <p className="text-sm text-blue-900 ">Enter atleast 15 characters</p>
            <button className="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">Submit comment</button>
          </div>   
        </div>   
      </div>
    </div>
  )
}

export default CommentsSection;

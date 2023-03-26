import React from "react";


const RecommendCard = ({ data }) => {
  console.log(data)
  return (
    <article className="relative rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div className=" flex justify-center justify-center ">
        <div className="hover:bg-wh-700 delay-50 duration-100 bg-gray-800 p-2 rounded-lg w-60 group relative" href="">
          <img src="https://artist-production.de/wp-content/uploads/2023/03/splin-in-europa-2.png" className="w-full rounded shadow" />
          <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full right-0 top-0 flex items-center group-hover:opacity-100 duration-700 transition justify-evenly">
            


            <button  className="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <svg v-if="this.is_playing == false" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            </button>

            <button className="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </button>
            
          </div>
          <h3 className="text-gray-200 font-bold mt-5">{data.title}</h3>

          <p className="text-gray-400 font-light mt-2 text-xs"> с {data.event_start}</p>
        </div>
      </div>
    </article>
  );
}

export default RecommendCard;

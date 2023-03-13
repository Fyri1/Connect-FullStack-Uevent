import React from "react";


const RecommendCard = () => {
  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <a href="#">
        <div className=" flex justify-center justify-center bg-gray-900">
    
    {/* <!-- Card --> */}
    <a className="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">
      
      {/* <!-- Image Cover --> */}
      <img src="https://picsum.photos/250/250" className="w-full rounded shadow" />
      
      {/* <!-- Title --> */}
      <h3 className="text-gray-200 font-bold mt-5"> Top 50 - Global</h3>
      
      {/* <!-- Description --> */}
      <p className="text-gray-400 font-light mt-2 text-xs"> Your daily update of the most played track from around the world...</p>
      
    </a>
    
  </div>
        </a>
    </article>
  );
}

export default RecommendCard;

import React from "react";


const RecommendCard = () => {
  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <a href="#">
        <div class=" flex justify-center justify-center bg-gray-900">
    
    {/* <!-- Card --> */}
    <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">
      
      {/* <!-- Image Cover --> */}
      <img src="https://picsum.photos/250/250" class="w-full rounded shadow" />
      
      {/* <!-- Title --> */}
      <h3 class="text-gray-200 font-bold mt-5"> Top 50 - Global</h3>
      
      {/* <!-- Description --> */}
      <p class="text-gray-400 font-light mt-2 text-xs"> Your daily update of the most played track from around the world...</p>
      
    </a>
    
  </div>
        </a>
    </article>
  );
}

export default RecommendCard;

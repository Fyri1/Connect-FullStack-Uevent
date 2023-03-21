import React from 'react';

import RecommendCard from './RecommendCard.jsx';


const RecommendSection = ({ event }) => {
  
  return (
    <div>
      <h1 className=" text-center bg-white rounded-md py-5 max-w-2xl mx-auto text-2xl font-bold text-gray-500">RECOMMEND</h1>
      <section >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
        </div>
      </section>
    </div>
    
  )
}

export default RecommendSection;

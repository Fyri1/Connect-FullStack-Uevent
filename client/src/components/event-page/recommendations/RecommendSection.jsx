import React from 'react';
import RecommendCard from './RecommendCard.jsx';
import { useEventRecommend } from '../../../../hooks/events/useEventReacomend.js';


const RecommendSection = ({ event }) => {
  const { isLoading, recommend } = useEventRecommend(event.id);
  return isLoading ? <></> : (
    <div>
      <h1 className=" text-center bg-white rounded-md py-5 max-w-2xl mx-auto text-2xl font-bold text-gray-500">RECOMMEND</h1>
      <section >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {recommend.map((item) => <RecommendCard data={item}/>)}
        </div>
      </section>
    </div>
    
  )
}

export default RecommendSection;

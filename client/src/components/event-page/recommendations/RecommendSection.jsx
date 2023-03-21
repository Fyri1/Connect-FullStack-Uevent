import React from 'react';
import RecommendCard from './RecommendCard.jsx';
import { useEventRecommend } from '../../../../hooks/events/useEventReacomend.js';

const RecommendSection = ({ event }) => {
  const { isLoading, recommend } = useEventRecommend(event.id);
  return isLoading ? (
    <></>
  ) : (
    <div>
      <h1 className="text-center bg-white rounded-md py-5 max-w-2xl mx-auto text-2xl font-bold text-gray-500 dark:text-dark-text-400 dark:bg-dark-bg-900">
        RECOMMEND
      </h1>
      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recommend.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
            >
              <RecommendCard data={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecommendSection;

import React from "react";
import { useEvent } from '../../../hooks/useEvent';
import { useParams } from 'react-router-dom'

import Spinner from '../common/Spinner.jsx';
import EventDetailsElement from "./EventDetailsElement.jsx";
import RecommendCard from './RecommendCard.jsx';
import CommentsSection from "./comments/CommentsSection.jsx";

import CheckoutButton from '../payment/PayForm.jsx';

// MAKS BLYA PERENESI VSY HYINU DLYA EVENT PAGE V OTDELNII FILE
import '../css/event-card.css'; // MAKS BLYA PERENESI VSY HYINU DLYA EVENT PAGE V OTDELNII FILE
// MAKS BLYA PERENESI VSY HYINU DLYA EVENT PAGE V OTDELNII FILE

// VOT SYDA
import '../css/EventPage.css';


const EventPage = () => {
  const id = useParams()['id'];
  const { isLoading, event } = useEvent(id);
  console.log(event);


  return isLoading ? <Spinner /> : (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto  lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2">
        <div className="">
          

        

          {/* Event name */}
          {/* mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white */}
          <h1 className="Event-name-div   ">{ event.title }</h1>

          {/* иконка локации */}
          <div className="start flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="pl-2">{ event.city }</p>
          </div>
          {/* Количество билетов */}
          <div className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>
            <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white">Tickets left: 1488</p>
          </div>    
          {/* Start event description */}
          <EventDetailsElement />
          {/* end event description  */}

          {/* govna */}
          <div className="">
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
              <table className="min-w-full bg-white">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">Who buy?</th>
                    <th className="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">When?</th>
                    <th className="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">Prise</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">17.03.2023</td>
                    <td className="w-1/3 text-left py-3 px-4">Hamburg Barclaycard Arena, Sylvesterallee 10, 22525</td>
                    <td className="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
                    <td className="text-left py-3 px-4"><CheckoutButton eventItem={event}/></td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="w-1/3 text-left py-3 px-4">17.03.2023</td>
                    <td className="w-1/3 text-left py-3 px-4">Hamburg Barclaycard Arena, Sylvesterallee 10, 22525</td>
                    <td className="price-td mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662"><button type="button" className="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button></a></td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">17.03.2023</td>
                    <td className="w-1/3 text-left py-3 px-4">Hamburg Barclaycard Arena, Sylvesterallee 10, 22525</td>
                    <td className="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662"><button type="button" className="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recomend */}
          
            <h1 className=" text-center bg-white rounded-md py-5 max-w-2xl mx-auto text-2xl font-bold text-gray-500">RECOMMEND</h1>
            <section >
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <RecommendCard />
                <RecommendCard />
                <RecommendCard />
                <RecommendCard />
              </div>
            </section>
          

          <CommentsSection />
        </div>
      </div>
    </div>
  );
}

export default EventPage;

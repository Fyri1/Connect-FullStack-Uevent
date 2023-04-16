import React from 'react';
import { useEvent } from '../../../hooks/events/useEvent.js';
import { useUserFavoriteEvent } from '../../../hooks/user/useUserFavoriteEvent.js';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEventTickets } from '../../../hooks/events/useEventTicket.js';

import Spinner from '../common/Spinner.jsx';
import EventDetailsHead from './event-details/EventDetailsHead.jsx';
import EventDetailsBody from './event-details/EventDetailsBody.jsx';
import RecommendSection from './recommendations/RecommendSection.jsx';
import CommentsSection from './comments/CommentsSection.jsx';
import Aside from './aside-menu/Aside.jsx';

import '../css/EventPage.css';
import '../css/event-card.css';
import { useUser } from '../../../hooks/user/useUser.js';

const EventPage = () => {
  const id = useParams()['id'];
  const [t, i18n] = useTranslation('eventPage');
  const { isLoading, event } = useEvent(id);
  const organizator = useUser(event?.user_id);
  const eventTickets = useEventTickets(id);
  const [edit, setEdit] = React.useState({})
  const favoriteEvent = useUserFavoriteEvent();
  if (isLoading || favoriteEvent.isLoading || eventTickets.isLoading || organizator.isLoading) {
    return <Spinner />;
  }

  return (
    <div>          
      <EventDetailsBody eventData={event} isFavorite={favoriteEvent.favorite.find((event) => event.id === id)}/>
      
      <div className="container m-auto py-6 px-4 sm:p-6 md:py-10 md:px-8 dark:bg-dark-bg-900">
        <div className=" mb-9 dark:bg-dark-bg-800 rounded-lg">
          <div className=" px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              <EventDetailsHead edit={edit} setEdit={setEdit} eventData={event} />
              <div className="Map">
                <h1 className="text-center bg-white rounded-md py-5 max-w-2xl mx-auto text-2xl font-bold text-gray-500 dark:text-dark-text-400 dark:bg-dark-bg-900">MAP</h1>
                <div className="flex flex-row items-center">
                  <div className='flex flex-col justify-center items-center'>
                    <div className='bg-[#8e5f27] h-4 w-8 rounded-t-md'></div>
                    <div className='w-12 h-60 bg-[#0c2e41] rounded-t-md'></div>
                    <div className='w-12 h-2 bg-yellow-600 rounded-t-full -mt-2'></div>
                    <div className='bg-[#8e5f27] h-4 w-8 rounded-t-md'></div>
                  </div>
                  <div
                    className=' box-content relative h-52 w-[500px] relative border-[#0c2e41] border-8 slide-ltr sliding-ltr flex flex-row ease'> 
                    <img className='h-full object-fit'src="https://i.ibb.co/xHVTzh7/2-VM4-JQb-Z4j-E.jpg"></img>
                    <img className='h-full object-fit'src="https://i.ibb.co/CwdZZzv/chrome-EBWLj-WZm-RO.png"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mt-0 md:w-1/4 ">
              <Aside edit={edit} setEdit={setEdit} eventData={{...organizator.user, ...event}} ticketLeft={eventTickets.tickets}/>
            </div>
          </div>
          <RecommendSection event={event}/>
          <CommentsSection eventId={id} />
        </div>
      </div>
    </div>
  );
}

export default EventPage;

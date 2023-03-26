import React from 'react';
import { useEvent } from '../../../hooks/events/useEvent.js';
import { useUserFavoriteEvent } from '../../../hooks/user/useUserFavoriteEvent.js';
import { useParams } from 'react-router-dom';

import Spinner from '../common/Spinner.jsx';
import EventDetailsHead from './event-details/EventDetailsHead.jsx';
import EventDetailsBody from './event-details/EventDetailsBody.jsx';
import TicketBuySection from './event-details/TicketBuySection.jsx';
import RecommendSection from './recommendations/RecommendSection.jsx';
import CommentsSection from './comments/CommentsSection.jsx';

import '../css/EventPage.css';
import '../css/event-card.css';


const EventPage = ({ currentUser }) => {
  const id = useParams()['id'];
  const { isLoading, event } = useEvent(id);
  const favoriteEvent = useUserFavoriteEvent();
  console.log(favoriteEvent)
  const unfoldButtonHandle = () => {
    console.log("pidorasa nado pokazat");
    const textElement = document.getElementsByClassName("text-retracted")[0];
    const textElementDiv = document.getElementsByClassName("main-event-content-retracted")[0];
    console.log(textElement);
    textElement.classList.remove("text-retracted");
    textElement.classList.add("text-unfolded");
    textElementDiv.classList.remove("main-event-content-retracted");
    textElementDiv.classList.add("main-event-content-unfolded");
  }


  return isLoading ? <Spinner /> : (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 dark:bg-dark-bg-900">
      <div className="max-w-4xl mx-auto lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2">
        <div className="pl-7 pt-5 mb-9 dark:bg-dark-bg-800 rounded-lg">
          <EventDetailsHead eventData={event} />
          {favoriteEvent.isLoading ? <></> : <EventDetailsBody eventData={event} isFavorite={favoriteEvent.favorite.find((event) => event.id === id)}/>}
        </div>
        

        {/* govna */}
        <TicketBuySection eventData={event} />
        {/* ebat kakogo govna */}

        <RecommendSection event={event}/>
        <CommentsSection eventId={id} />
      </div>
    </div>
  );
}

export default EventPage;

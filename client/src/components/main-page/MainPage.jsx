import React from 'react';

import Spinner from '../common/Spinner.jsx';
import Sidebar from './Sidebar.jsx';
import EventElement from './EventElement.jsx';

import { useEvents } from '../../../hooks/events/useEvents.js';
import '../css/event-card.css';
import '../css/main-page.css';

const MainPage = () => {
  const { isLoading, events } = useEvents();
  
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="main-content">
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <Sidebar />

                <div className="flex overflow-hidden  ">
                  {events.map((event, i) => (
                    <EventElement key={event.id} event={event} />
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;

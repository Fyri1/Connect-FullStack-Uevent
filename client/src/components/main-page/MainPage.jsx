import React from 'react';

import Spinner from '../common/Spinner.jsx';
import Sidebar from './Sidebar.jsx';
import EventElement from './EventElement.jsx';

import { useEvents } from '../../../hooks/useEvents.js';
import '../css/event-card.css';
import '../css/main-page.css';

import data from '../../temp/events_data.json';

const MainPage = () => {
  const [eventsList, setEventsList] = React.useState([]);
  const [userData, setUserData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const onLoad = () => {
    try {
      // Throw request on api for events and logged user info if any
      console.log('sasi zagryzka: ' + isLoading);
      setEventsList(data);
      setUserData({
        fullname: 'dayn',
        login: 'dayn_login',
        email: 'dayn_email',
      }); 
      setIsLoading(false);
    } catch (error) {
      console.log('error pizdec! ' + error);
    }
  };

  React.useState(() => {
    onLoad();
  }, []);
  const eventsElements = eventsList.map((event, i) => {
    return <EventElement key={event.id} event={event} />;
  });

  console.log(eventsElements);

  return (
    <div>
      { isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="main-content">
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <Sidebar />
                <div className='Kokon-na-mazy'>
                  {eventsElements}
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

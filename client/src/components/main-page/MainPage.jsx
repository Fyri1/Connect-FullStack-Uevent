import React from 'react';

import Spinner from '../common/Spinner.jsx';
import Sidebar from './Sidebar.jsx';
import EventElement from './EventElement.jsx';

import apiRoutes from '../../routes/api/apiClientRoutes.js';
import clientRoutes from '../../routes/client/clientRoutes.js';
import '../css/event-card.css';
import '../css/main-page.css';

import data from '../../temp/events_data.json';
import { useEvents } from '../../../hooks/useEvents.js';

const MainPage = () => {
  // const [eventsList, setEventsList] = React.useState([]);

  // const [userData, setUserData] = React.useState({});
  // const [isLoading, setIsLoading] = React.useState(true);

  // const onLoad = () => {
  //   try {
  //     // Throw request on api for events and logged user info if any
  //     console.log('sasi zagryzka: ' + isLoading);
  //     setEventsList(data);
  //     setUserData({
  //       fullname: 'dayn',
  //       login: 'dayn_login',
  //       email: 'dayn_email',
  //     });
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log('error pizdec! ' + error);
  //   }
  // };

  // React.useState(() => {
  //   onLoad();
  // }, []);
  const { isLoading, events } = useEvents();

  return isLoading ? (
    <Spinner />
  ) : events ? (
    <div>
      <p>This is MainPage</p>
      <Sidebar />
      <div className="main-content">
        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <h2 class="title text-center">Features Items</h2>
            {events.map((event, i) => {
              return <EventElement key={event.i} event={event} />;
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>No content</div>
  );
};

export default MainPage;

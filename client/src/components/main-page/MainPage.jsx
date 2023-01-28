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
  const { isLoading, events } = useEvents();

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <p>This is MainPage</p>
      <Sidebar />
      <div className="main-content">
        <div className="col-sm-9 padding-right">
          <div className="features_items">
            <h2 className="title text-center">Features Items</h2>
            {
              events?.data
              ?
              events.data.values.map((event, i) => {
                return <EventElement key={event.i} event={event} />
              })
              :
              <div>No content</div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

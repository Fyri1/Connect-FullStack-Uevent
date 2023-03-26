import React from 'react';
import { useTranslation } from 'react-i18next';

import Spinner from '../common/Spinner.jsx';
import Sidebar from './Sidebar.jsx';
import EventElement from './EventElement.jsx';

import { useEvents } from '../../../hooks/events/useEvents.js';
import '../css/event-card.css';
import '../css/main-page.css';

const MainPage = () => {
  const [t, i18n] = useTranslation('mainPage');
  const { isLoading, events } = useEvents();

  return isLoading ? <Spinner /> : (
    <div className="main-content dark:bg-dark-bg-900">
      <div className="col-sm-9 padding-right">
        <div className="features_items">
          <h2 className="box-border my-8 text-2xl font-black leading-tight tracking-tight text-black border-solid sm:text-2xl md:text-4xl text-center dark:text-dark-text-200">
            { t('head.zamanyxa') }
          </h2>

          <Sidebar />

          <div className="ticket-with-main flex overflow-hidden">
            { events.map((event, i) => ( <EventElement key={event.id} event={event} /> ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainPage;

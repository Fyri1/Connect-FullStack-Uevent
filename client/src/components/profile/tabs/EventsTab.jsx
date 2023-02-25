import React from 'react';
import { useUserTickets } from '../../../../hooks/useUserTickets.js';
import Spinner from '../../common/Spinner.jsx';

const EventsTab = ({ userData }) => {
  if (!userData) {
    return <Spinner />;
  }
  const { isLoading, userTickets } = useUserTickets(userData.values.id);
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {!userTickets
        ? `You have not purchased tickets yet`
        : userTickets.map(({ id, event_id, name, price, start, end }, i) => (
            <div key={i}>{name}</div>
          ))}
    </div>
  );
};

export default EventsTab;

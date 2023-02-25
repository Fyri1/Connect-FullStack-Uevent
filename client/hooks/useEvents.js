import { useQuery } from 'react-query';
import { EventService } from '../services/events.service';

const useEvents = () => {
  const { isLoading, data: events } = useQuery('events', () => EventService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
    select: ({data}) => data.values
  });
  return { isLoading, events };
};

export { useEvents };

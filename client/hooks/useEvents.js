import { useQuery } from 'react-query';
import { EventService } from '../services/events.service';

const useEvents = () => {
  const { isLoading, data } = useQuery('events', () => EventService.getAll(), {
    onSuccess: ({ data }) => {},
    onError: (error) => {
      console.log(error);
    },
  });
  console.log(data);
  return { isLoading, data };
};

export { useEvents };

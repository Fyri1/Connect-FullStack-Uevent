import { useQuery } from 'react-query';
import { UsersService } from '../services/users.service';

const useUserTickets = (id) => {
    const { isLoading, data: userTickets } = useQuery(['user', id], () => UsersService.getUserTickets(id || ''), {
    onError: (error) => {
      console.log(error);
    },
    select: ({ data }) => data.values,
    enabled: !!id
  });
  return { isLoading, userTickets };
};

export { useUserTickets };

import { useQuery } from 'react-query';
import { UsersService } from '../services/users.service';

const useUser = (id) => {
  const { isLoading, data: user } = useQuery(['user', id], () => UsersService.getById(id || ''), {
    onError: (error) => {
      console.log(error);
    },
    select: ({ data }) => data,
    enabled: !!id,
  });
  return { isLoading, user };
};

export { useUser };

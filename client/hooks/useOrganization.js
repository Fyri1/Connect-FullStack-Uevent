import { useQuery } from 'react-query';
import { UsersService } from '../services/users.service';

const useOrganization = () => {
  const { isLoading, data: organizations } = useQuery('organizations', () => UsersService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, organizations };
};

export { useOrganization };

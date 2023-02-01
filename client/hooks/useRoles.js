import { useQuery } from 'react-query';
import { UsersService } from '../services/users.service';

const useRoles = () => {
  const { isLoading, data: roles } = useQuery('roles', () => UsersService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, roles };
};

export { useRoles };

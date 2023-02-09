import { useQuery } from 'react-query';
import { UsersService } from '../services/users.service';

const useUserProfile = (id) => {
  const { isLoading, data: userInfo } = useQuery('user-profile', () => UsersService.getInfoUser(), {
    onError: (error) => {
      console.log(error);
    },
    select: ({ data }) => data,
  });
  return { isLoading, userInfo };
};

export { useUserProfile };

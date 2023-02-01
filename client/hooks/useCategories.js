import { useQuery } from 'react-query';
import { UsersService } from '../services/users.service';

const useCategories = () => {
  const { isLoading, data: categories } = useQuery('categories', () => UsersService.getAll(), {
    onError: (error) => {
      console.log(error);
    },
  });
  return { isLoading, categories };
};

export { useCategories };

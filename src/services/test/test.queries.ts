import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_FACTORY } from '../queryKeys';
import { getTest } from './test.api';

export const useQueryTest = (onSuccess?: () => {}) => {
  return useQuery(QUERY_KEY_FACTORY('TEST').lists(), () => getTest(), {
    refetchOnWindowFocus: false,
    enabled: false,
    onSuccess,
    onError: (error: any) => {
      console.log(error);
    },
    retry: 0,
  });
};

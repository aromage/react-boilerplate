import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { QUERY_KEY_FACTORY } from '../queryKeys';
import { createTest } from './test.api';

export const useCreateTest = (
  onSuccess?,
): UseMutationResult<any, Error, any, number> => {
  const queryClient = useQueryClient();

  return useMutation(
    [QUERY_KEY_FACTORY('TEST').all],
    (requestBody) => createTest(requestBody),
    {
      onSettled: () =>
        queryClient.invalidateQueries(QUERY_KEY_FACTORY('TEST').all),
      onSuccess,
      onError: (error: any) => {
        console.log(error);
      },
    },
  );
};

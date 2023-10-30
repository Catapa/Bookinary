import { useRequest } from './generic/useRequest';
import { ITrendingResponse } from '../../types';

type EPeriod = 'now' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'forever';

export const useTrendingBooks = (period: EPeriod): ITrendingResponse => {
  return useRequest(`/trending/${period}`, {
    //limit: 6
  });
};

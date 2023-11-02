import { useRequest } from './generic/useRequest';
import { ITrendingResponse } from '../../types';

type EPeriod = 'now' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'forever';

/**
 * Fetches a list of trending books for a specified period.
 *
 * @param {EPeriod} period - The period for which to fetch trending books.
 * @param {object} [params] - Optional query parameters for the request.
 *
 * @returns {ITrendingResponse} An object containing the response data, loading state, and error for trending books.
 */
export const useTrendingBooks = (
  period: EPeriod,
  params?: object,
): ITrendingResponse => {
  return useRequest(`/trending/${period}`, {
    ...params,
  });
};

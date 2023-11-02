import { useRequest } from './generic/useRequest';
import { IWork, T_Work_Key } from '../../types';

/**
 * Fetches information about a specific work based on its OLID (Open Library Identifier).
 *
 * @param {T_Work_Key} olid - The OLID of the work to fetch.
 * @param {boolean} [shouldFetch=true] - A flag indicating whether data should be fetched immediately.
 *
 * @returns {IWork} An object containing information about the work or an empty object if no data is available.
 */
export const useWork = (olid: T_Work_Key, shouldFetch?: boolean): IWork => {
  const params: object | undefined = undefined;
  const base_url: string | undefined = undefined;
  return useRequest(`/works/${olid}.json`, params, base_url, shouldFetch);
};

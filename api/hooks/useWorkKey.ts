import { useRequest } from './generic/useRequest';
import { T_Edition_Key, T_Work_Key } from '../../types';

/**
 * Fetches the work key associated with a specific work based on an edition's OLID (Open Library Identifier).
 *
 * @param {T_Edition_Key} olid - The OLID of the edition for which to fetch the work key.
 * @param {boolean} [shouldFetch=true] - A flag indicating whether data should be fetched immediately.
 *
 * @returns {{
 *   work_key: T_Work_Key,
 *   isLoading: boolean,
 *   error: Error | null
 * }} An object containing the work key, loading state, and error for the edition.
 */
export const useWorkKey = (
  olid: T_Edition_Key,
  shouldFetch?: boolean,
): { work_key: T_Work_Key; isLoading: boolean; error: Error | null } => {
  const { data, isLoading, error } = useRequest(`/works/${olid}.json`);

  const works: { key: string }[] = data?.works || [];
  const key: string = works[0]?.key;
  const work_key = key?.split('/').pop() as T_Work_Key;

  return { work_key, isLoading, error };
};

import { useRequest } from './generic/useRequest';
import { T_Edition_Key, T_Work_Key } from '../../types';

export const useWorkKey = (
  olid: T_Edition_Key,
  shouldFetch?: boolean,
): { work_key: T_Work_Key; isLoading: boolean; error: Error | null } => {
  const { data, isLoading, error } = useRequest(`/works/${olid}.json`);

  //console.log('data', data);
  //if (!isLoading) {
  const works: { key: string }[] = data?.works || [];
  const key: string = works[0]?.key;
  const work_key = key?.split('/').pop() as T_Work_Key;
  //}
  return { work_key, isLoading, error };
};

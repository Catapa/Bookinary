import { useRequest } from './generic/useRequest';
import { IWork, T_Work_Key } from '../../types';

export const useWork = (olid: T_Work_Key, shouldFetch?: boolean): IWork => {
  const params: object | undefined = undefined;
  const base_url: string | undefined = undefined;
  return useRequest(`/works/${olid}.json`, params, base_url, shouldFetch);
};

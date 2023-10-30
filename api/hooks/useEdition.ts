import { useRequest } from './generic/useRequest';
import { IWorkEdition, T_Edition_Key } from '../../types';

export const useEdition = (olid: T_Edition_Key): IWorkEdition => {
  return useRequest(`/api/books`, {
    bibkeys: `OLID:${olid}`,
    format: 'json',
    jscmd: 'data',
  });
};

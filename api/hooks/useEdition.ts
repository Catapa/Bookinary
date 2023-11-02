import { useRequest } from './generic/useRequest';
import { IWorkEdition, T_Edition_Key } from '../../types';

/**
 * Fetches edition data for a book based on its OLID (Open Library Identifier).
 * @param {T_Edition_Key} olid - The OLID of the book edition to fetch.
 * @returns {IWorkEdition} An object containing edition data or an empty object if no data is available.
 */
export const useEdition = (olid: T_Edition_Key): IWorkEdition => {
  return useRequest(`/api/books`, {
    bibkeys: `OLID:${olid}`,
    format: 'json',
    jscmd: 'data',
  });
};

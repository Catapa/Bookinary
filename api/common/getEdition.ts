import { IWorkEdition, T_Edition_Key } from "../../types";
import { useRequest } from "../hooks";


export const getEdition = (olid: T_Edition_Key): IWorkEdition => {
	return useRequest(`/api/books`, {
		bibkeys: `OLID:${olid}`,
		format: 'json',
		jscmd: 'data'
	});
};
import { IWorkEdition } from "../../types";
import { useRequest } from "../hooks";

export const getWork = (olid: string): IWorkEdition => {
	return useRequest(`/api/books`, {
		bibkeys: `OLID:${olid}`,
		format: 'json',
		jscmd: 'data'
	});
};
import { ITrendingResponse } from "../../types";
import { useRequest } from "../hooks";

export const getCover = (keyType: string, keyValue: string, size: 'S' | 'M' | 'L'): ITrendingResponse => {
	return useRequest(`b/${keyType}/${keyValue}-${size}.jpg`, {}, 'https://covers.openlibrary.org');
};
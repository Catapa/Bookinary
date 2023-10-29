import { ITrendingResponse } from "../../types";
import { useRequest } from "../hooks";

type EPeriod = 'daily' | 'weekly' | 'monthly';

export const getTrendingBooks = (period: EPeriod): ITrendingResponse => {
	return useRequest(`/trending/${period}`);
};
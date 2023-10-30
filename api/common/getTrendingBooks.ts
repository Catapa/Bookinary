import { ITrendingResponse } from "../../types";
import { useRequest } from "../hooks";

type EPeriod = 'now' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'forever';

export const getTrendingBooks = (period: EPeriod): ITrendingResponse => {
	return useRequest(`/trending/${period}`, {
		limit: 6
	});
};
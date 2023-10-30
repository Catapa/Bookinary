import { IWork, T_Work_Key } from "../../types"
import { useRequest } from "../hooks"

export const getWork = (olid: T_Work_Key): IWork => {
	return useRequest(`/works/${olid}.json`);
};
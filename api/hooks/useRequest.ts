import axios from 'axios';
import { useEffect, useState } from 'react';
import { IResponse } from '../../types';
import { Alert } from 'react-native';


const BASE_URL = 'https://openlibrary.org';

export const useRequest = (endpoint: string, params?: object, base_url?: string): IResponse => {
	const [info, setInfo] = useState<{ data: object, isLoading: boolean, error: Error | null }>({
		data: {},
		isLoading: false,
		error: null
	});
	const updateState = async (field: string, value: object | boolean | Error) => {
		setInfo(
			prevState => (
				{
					...prevState,
					[field]: value
				}
			))
	};

	const options = {
		method: 'GET',
		url: base_url ? `${base_url}/${endpoint}` : `${BASE_URL}/${endpoint}`,
		params: { ...params },
		headers: {

		}
	};

	const fetchData = async () => {
		await updateState('isLoading', true);
		try {
			const response = await axios.request(options);
			await updateState('data', response.data);
			//console.log('response', response);
		} catch (error) {
			if (error instanceof Error) {
				await updateState('error', error);
				Alert.alert('Something went wrong', error.message);
				console.error(error.message);
			}
		} finally {
			await updateState('isLoading', false);
		};

	};

	const refetch = async () => {
		await updateState('isLoading', true);
		fetchData();
	};

	useEffect(() => {
		fetchData();
	}, []);

	return {
		data: info.data,
		isLoading: info.isLoading,
		error: info.error,
		refetch
	};
};
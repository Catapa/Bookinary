import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { IResponse } from '../../../types';

const BASE_URL = 'https://openlibrary.org';

/**
 * Fetches data from an API endpoint using Axios and provides a stateful response.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {object} [params] - Optional query parameters for the request.
 * @param {string} [base_url] - Optional base URL for the API endpoint.
 * @param {boolean} [shouldFetch=true] - A flag indicating whether data should be fetched immediately.
 *
 * @returns {IResponse} An object containing the response data, loading state, error and a refetch function.
 */
export const useRequest = (
  endpoint: string,
  params?: object,
  base_url?: string,
  shouldFetch: boolean = true,
): IResponse => {
  const [info, setInfo] = useState<{
    data: object | undefined;
    isLoading: boolean;
    error: Error | null;
  }>({
    data: undefined,
    isLoading: true,
    error: null,
  });
  const updateState = (
    field: string,
    value: object | boolean | Error | undefined,
  ) => {
    setInfo((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const options = {
    method: 'GET',
    url: base_url ? `${base_url}/${endpoint}` : `${BASE_URL}/${endpoint}`,
    params: { ...params },
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const fetchData = async () => {
    updateState('isLoading', true);
    try {
      const response = await axios.request(options);
      const data = await response.data;
      updateState('data', data);
      //console.log('response', response);
    } catch (error) {
      if (error instanceof AxiosError) {
        updateState('error', error);
        Alert.alert('Something went wrong', JSON.stringify(error.request));
        //console.error(error.message);
      }
    } finally {
      updateState('isLoading', false);
    }
  };

  const refetch = async () => {
    updateState('isLoading', true);
    fetchData();
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
    }
  }, [shouldFetch]);

  return {
    data: info.data,
    isLoading: info.isLoading,
    error: info.error,
    refetch,
  };
};

'use server';

import { createAxiosInstance } from '@/lib/axiosInstance';

// Uses to authentication and authorization protected endpoints. It automatically tries to refresh the access token
export const fetchWithRefresh = async (url: string, options = {}) => {
  const axiosInstance = await createAxiosInstance();

  const response = await axiosInstance({
    url,
    ...options,
  });

  return response.data;
};

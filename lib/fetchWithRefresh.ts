'use server';

import { createAxiosInstance } from '@/lib/axiosInstance';

export const fetchWithRefresh = async (url: string, options = {}) => {
  const axiosInstance = await createAxiosInstance();

  const response = await axiosInstance({
    url,
    ...options,
  });

  return response.data;
};

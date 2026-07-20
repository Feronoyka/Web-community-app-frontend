'use server';

import axios from 'axios';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const API = process.env.API_URL;

export const createAxiosInstance = async () => {
  const cookieStore = await cookies();

  const axiosInstance = axios.create({
    baseURL: API,
  });

  axiosInstance.interceptors.request.use((config) => {
    const accessToken = cookieStore.get('accessToken')?.value;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
      const originalRequest = error.config;

      console.log('Response error:', {
        error: error.response?.status,
        url: originalRequest.url,
        data: error.response.data,
      });

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = cookieStore.get('refreshToken')?.value;

          // console.log(refreshToken);

          if (!refreshToken) return null;

          const refreshResponse = await axios.post(
            `${API}/auth/refresh`,
            {},
            {
              headers: {
                Cookie: `refreshToken=${refreshToken}`,
              },
            },
          );

          // console.log(refreshResponse);

          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            refreshResponse.data;

          cookieStore.set('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
          });

          cookieStore.set('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
          });

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.log(refreshError);

          cookieStore.delete('accessToken');
          cookieStore.delete('refreshToken');
          redirect('/sign-in');
        }
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

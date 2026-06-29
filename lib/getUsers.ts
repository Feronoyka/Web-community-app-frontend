'use server';

import { User } from '@/types';
import axios from 'axios';

const API = process.env.API_URL;

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(`${API}/users`);

    const users = response.data ?? [];

    if (!users) {
      console.log('Unknown error with get users');
    }

    return users;
  } catch (error) {
    console.error('Error fetching get users:', error);
    return [];
  }
};

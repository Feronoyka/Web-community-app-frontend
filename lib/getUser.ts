'use server';

import { User } from '@/types';
import axios from 'axios';

const API = process.env.API_URL;

export const getUser = async (id: string): Promise<User | null> => {
  try {
    const response = await axios.get(`${API}/users/${id}`);

    const user = response.data ?? null;

    return user;
  } catch (error) {
    console.error('Error fetching user', error);
    return null;
  }
};

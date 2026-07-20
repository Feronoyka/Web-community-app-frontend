'use server';

import { CommunityFromApi } from '@/types';
import axios from 'axios';

const API = process.env.API_URL;

export const getCommunity = async (
  id: string,
): Promise<CommunityFromApi | null> => {
  try {
    const response = await axios.get(`${API}/communities/${id}`);

    const community = response.data ?? null;

    return community;
  } catch (error) {
    console.error('Error fetching get one community', error);
    return null;
  }
};

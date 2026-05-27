'use server';

import { CommunityFromApi } from '@/types';
import axios from 'axios';

const API = process.env.API_URL;

type Response = {
  data: {
    data: CommunityFromApi[];
    meta?: {
      total?: number;
      limit?: number;
      offset?: number;
    };
  };
};

export const queryCommunities = async ({
  setCommunities,
  setIsLoading,
  queryCommunity,
}: {
  setCommunities: (communities: CommunityFromApi[]) => void;
  setIsLoading: (loading: boolean) => void;
  queryCommunity: string;
}) => {
  try {
    const response: Response = await axios.get(
      `${API}/communities?search=${queryCommunity}`,
    );

    console.log(response.data.data);

    setCommunities(response.data.data);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

import { CommunityFromApi } from '@/types';
import { normalizeCommunities } from '@/utils/normalizeCommunities';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL;

type QueryCommunitiesParams = {
  setCommunities: (communities: CommunityFromApi[]) => void;
  setIsLoading: (loading: boolean) => void;
  searchCommunity: string;
};

export async function queryCommunities({
  setCommunities,
  setIsLoading,
  searchCommunity,
}: QueryCommunitiesParams) {
  setIsLoading(true);

  try {
    const response = await axios.get(`${API}/communities`, {
      params: { search: searchCommunity },
    });

    setCommunities(normalizeCommunities(response.data));
  } catch (error) {
    console.error(error);
    setCommunities([]);
  } finally {
    setIsLoading(false);
  }
}

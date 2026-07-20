import { CommunityFromApi } from '@/types';
import { normalizeCommunities } from '@/utils/normalizeCommunities';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL;

type QueryCommunitiesParams = {
  setCommunities: (communities: CommunityFromApi[]) => void;
  setIsLoading: (loading: boolean) => void;
  debounceQuery: string;
  signal: AbortSignal;
};

export async function fethcQueryCommunities({
  setCommunities,
  setIsLoading,
  debounceQuery,
  signal,
}: QueryCommunitiesParams) {
  setIsLoading(true);

  try {
    const response = await axios.get(`${API}/communities`, {
      params: { search: debounceQuery },
      signal,
    });

    const communities = normalizeCommunities(response.data);

    setCommunities(communities);
  } catch (error) {
    if (axios.isCancel(error)) {
      return;
    }

    console.error('Error fetching query communities:', error);
    setCommunities([]);
  } finally {
    if (!signal.aborted) {
      setIsLoading(false);
    }
  }
}

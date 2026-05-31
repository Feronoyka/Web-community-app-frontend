import { User } from '@/types';
import { normalizeUsers } from '@/utils/normalizeUsers';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL;

type QueryUsersParams = {
  setIsLoading: (loading: boolean) => void;
  setResults: Dispatch<SetStateAction<User[]>>;
  debounceQuery: string;
  signal: AbortSignal;
};

export async function fetchUsersQuery({
  setIsLoading,
  setResults,
  debounceQuery,
  signal,
}: QueryUsersParams) {
  setIsLoading(true);

  try {
    const response = await axios.get(`${API}/users`, {
      params: { search: debounceQuery },
      signal,
    });

    const users = normalizeUsers(response.data);

    setResults(users);
  } catch (error) {
    if (axios.isCancel(error)) {
      return;
    }

    console.error('Error fetching query users:', error);
    setResults([]);
  } finally {
    if (!signal.aborted) {
      setIsLoading(false);
    }
  }
}

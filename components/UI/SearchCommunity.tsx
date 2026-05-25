'use client';

import { useDebounce } from '@/hooks/useDebounce';
import axios from 'axios';
import { useEffect, useState } from 'react';

type SearchType = {
  name: string;
  className?: string;
};

const API = process.env.API_URL;

function SearchCommunity({ name, className }: SearchType) {
  const [queryCommunity, setQueryCommunity] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceQuery = useDebounce(queryCommunity, 600);

  useEffect(() => {
    const fetchCommunityQuery = async () => {
      if (!debounceQuery.trim()) return;

      setIsLoading(true);

      try {
        const response = await axios.get(
          `${API}/communities/?search=${queryCommunity}`,
        );
        setResults(response.data.data ?? []);
      } catch (error) {
        console.error(error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommunityQuery();
  }, [debounceQuery, queryCommunity]);

  return (
    <>
      <input
        className={`border-2 shadow-(--cartoon-shadow) ${className}`}
        type='text'
        placeholder={name}
        value={queryCommunity}
        onChange={(e) => setQueryCommunity(e.target.value)}
      />
    </>
  );
}

export default SearchCommunity;

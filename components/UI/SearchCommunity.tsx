'use client';

import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

type SearchType = {
  name: string;
  className?: string;
};

function SearchCommunity({ name, className }: SearchType) {
  const [queryCommunity, setQueryCommunity] = useState('');
  const debounceQuery = useDebounce(queryCommunity, 600);

  useEffect(() => {
    const fetchCommunityQuery = async () => {
      if (!debounceQuery.trim()) return;
      console.log('API calls');
    };
    fetchCommunityQuery();
  }, [debounceQuery]);

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

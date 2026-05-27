'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useCommunityStore } from '@/provider/community-provider';
import { queryCommunities } from '@/lib/queryCommunities';

type SearchType = {
  name: string;
  className?: string;
};

function SearchCommunity({ name, className }: SearchType) {
  const [queryCommunity, setQueryCommunity] = useState('');
  const debounceQuery = useDebounce(queryCommunity, 600);
  const setCommunities = useCommunityStore((state) => state.setCommunities);
  const setIsLoading = useCommunityStore((state) => state.setIsLoading);

  useEffect(() => {
    const fetchCommunityQuery = async () => {
      if (!debounceQuery.trim()) return;

      setIsLoading(true);

      await queryCommunities({ setCommunities, setIsLoading, queryCommunity });
    };

    fetchCommunityQuery();
  }, [debounceQuery, setCommunities, queryCommunity, setIsLoading]);

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

'use client';

import { useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useCommunityStore } from '@/provider/community-provider';
import { fethcQueryCommunities } from '@/lib/queryCommunities';

type SearchType = {
  name: string;
  className?: string;
};

function SearchCommunity({ name, className }: SearchType) {
  const searchCommunity = useCommunityStore((state) => state.searchCommunity);
  const debounceQuery = useDebounce(searchCommunity, 600);
  const setCommunities = useCommunityStore((state) => state.setCommunities);
  const setIsLoading = useCommunityStore((state) => state.setIsLoading);
  const setSearchCommunity = useCommunityStore(
    (state) => state.setSearchCommunity,
  );

  useEffect(() => {
    if (!debounceQuery.trim()) return;

    const controller = new AbortController();

    void fethcQueryCommunities({
      setCommunities,
      setIsLoading,
      debounceQuery,
      signal: controller.signal,
    });
  }, [debounceQuery, setCommunities, setIsLoading]);

  return (
    <div
      className={`border-2 py-4 pl-6 shadow-(--cartoon-shadow) rounded-[10px] ${className}`}
    >
      <input
        className='outline-none'
        type='text'
        placeholder={name}
        value={searchCommunity}
        onChange={(e) => setSearchCommunity(e.target.value)}
      />
    </div>
  );
}

export default SearchCommunity;

'use client';

import { useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useCommunityStore } from '@/provider/community-provider';
import { queryCommunities } from '@/lib/queryCommunities';

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
    if (!debounceQuery.trim()) {
      setCommunities([]);
      setIsLoading(false);
      return;
    }

    void queryCommunities({
      setCommunities,
      setIsLoading,
      searchCommunity: debounceQuery,
    });
  }, [debounceQuery, setCommunities, setIsLoading]);

  return (
    <>
      <input
        className={`border-2 shadow-(--cartoon-shadow) ${className}`}
        type='text'
        placeholder={name}
        value={searchCommunity}
        onChange={(e) => setSearchCommunity(e.target.value)}
      />
    </>
  );
}

export default SearchCommunity;

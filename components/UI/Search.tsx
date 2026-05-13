'use client';

import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

type SearchType = {
  name: string;
  className?: string;
};

function Search({ name, className }: SearchType) {
  const [queryPeople, setQueryPeople] = useState('');
  const debounceQuery = useDebounce(queryPeople, 600);

  useEffect(() => {
    if (!debounceQuery) return;

    console.log('API calls:', debounceQuery);
  }, [debounceQuery]);

  return (
    <>
      <input
        className={`border-2 shadow-(--cartoon-shadow) ${className}`}
        type='text'
        placeholder={name}
        value={queryPeople}
        onChange={(e) => setQueryPeople(e.target.value)}
      />
    </>
  );
}

export default Search;

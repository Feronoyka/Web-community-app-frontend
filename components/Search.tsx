'use client';

import { useState } from 'react';

type SearchType = {
  name: string;
  className?: string;
};

function Search({ name, className }: SearchType) {
  const [search, setSearch] = useState('');

  return (
    <>
      <input
        className={className}
        type='text'
        placeholder={name}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default Search;

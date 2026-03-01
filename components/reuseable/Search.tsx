'use client';

import { useState } from 'react';

type SearchType = {
  name: string;
};

function Search({ name }: SearchType) {
  const [search, setSearch] = useState('');

  return (
    <>
      <input
        className='w-260px text-xl py-[9px] pl-[16px] bg-[#F8CD86] outline-none rounded-[10px]'
        type='text'
        placeholder={name}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default Search;

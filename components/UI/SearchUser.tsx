'use client';

import { DefaultUserIcon } from '@/assets/icons';
import { useDebounce } from '@/hooks/useDebounce';
import { fetchUsersQuery } from '@/lib/queryUsers';
import { User } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type SearchType = {
  name: string;
  className?: string;
};

function SearchUser({ name, className }: SearchType) {
  const [queryUsers, setQueryUsers] = useState('');
  const [results, setResults] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceQuery = useDebounce(queryUsers, 600);

  useEffect(() => {
    if (!debounceQuery.trim()) return;

    const controller = new AbortController();

    console.log('fetching...');

    void fetchUsersQuery({
      setIsLoading,
      setResults,
      debounceQuery,
      signal: controller.signal,
    });
  }, [debounceQuery]);

  const showResults = debounceQuery.trim() ? results : [];
  return (
    <div className='relative'>
      <input
        className={`border-2 shadow-(--cartoon-shadow) ${className}`}
        type='text'
        placeholder={name}
        value={queryUsers}
        onChange={(e) => setQueryUsers(e.target.value)}
      />

      {showResults.length > 0 && (
        <ul className='absolute top-full left-80% bg-white px-3 py-4 rounded-[10px] w-[90%]'>
          {showResults.map((user) => (
            <li
              key={user.id}
              className='hover:bg-gray-200 rounded-[10px] px-1 py-2'
            >
              <Link href={`/profile/${user.id}`} className='flex items-center'>
                {user.avatarUrl ? (
                  <Image
                    src={user.avatarUrl}
                    alt=''
                    width={32}
                    height={32}
                    className='rounded-full'
                  />
                ) : (
                  <div>
                    <DefaultUserIcon />
                  </div>
                )}
                <div className='ml-2'>
                  <p className='font-semibold text-lg'>{user.username}</p>
                  <p className='text-gray-400 opacity-70 text-sm'>
                    @{user.nickname}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchUser;

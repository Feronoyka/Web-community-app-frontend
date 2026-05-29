'use client';

import { DefaultUserIcon } from '@/assets/icons';
import { useDebounce } from '@/hooks/useDebounce';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type SearchType = {
  name: string;
  className?: string;
};

type UserResult = {
  id: string;
  nickname: string;
  username?: string;
  avatarUrl?: string;
};

const API = process.env.NEXT_PUBLIC_API_URL;

function SearchUser({ name, className }: SearchType) {
  const [queryPeople, setQueryPeople] = useState('');
  const [results, setResults] = useState<UserResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceQuery = useDebounce(queryPeople, 600);

  useEffect(() => {
    const fetchUserQuery = async () => {
      if (!debounceQuery.trim()) return;

      setIsLoading(true);

      try {
        const response = await axios.get(`${API}/users/?search=${queryPeople}`);
        setResults(response.data.data ?? []);
      } catch (error) {
        console.error('Error fetching query:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserQuery();
  }, [debounceQuery, queryPeople]);

  return (
    <>
      <input
        className={`border-2 shadow-(--cartoon-shadow) ${className}`}
        type='text'
        placeholder={name}
        value={queryPeople}
        onChange={(e) => setQueryPeople(e.target.value)}
      />

      {results.length > 0 ||
        (isLoading && (
          <ul>
            {isLoading ? (
              <li>Searching...</li>
            ) : results ? (
              results.map((user) => (
                <li key={user.id}>
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
                  <Link href={''}>
                    <div>
                      <p>{user.username}</p>
                      <p>{user.nickname}</p>
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <p>User not found</p>
            )}
          </ul>
        ))}
    </>
  );
}

export default SearchUser;

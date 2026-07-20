'use client';

import { createContext, useContext, useRef } from 'react';
import { CommunityStore, createCommunityStore } from '@/store/community';
import { useStore } from 'zustand';

type Store = ReturnType<typeof createCommunityStore>;
const Context = createContext<Store | null>(null);

export function CommunityProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<Store>(null);

  const currentStore = (storeRef.current ||= createCommunityStore());

  if (!currentStore) {
    storeRef.current = createCommunityStore();
  }

  return (
    <Context.Provider value={storeRef.current}>{children}</Context.Provider>
  );
}

export function useCommunityStore<T>(selector: (s: CommunityStore) => T) {
  const store = useContext(Context);

  if (!store) throw new Error('Missing CommunityProvider');

  return useStore(store, selector);
}

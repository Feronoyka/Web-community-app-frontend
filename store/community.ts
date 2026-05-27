import { createStore } from 'zustand';

export type CommunityState = { community: []; setResults: () => void };

export const createCommunityStore = (community?: []) =>
  createStore<CommunityState>()((set) => ({
    community: [],
    setResults: () => set(() => ({ community })),
  }));

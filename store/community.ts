import { CommunityFromApi } from '@/types';
import { createStore } from 'zustand';

export type CommunityStore = {
  communities: CommunityFromApi[];
  searchCommunity: string;
  isLoading: boolean;
  setCommunities: (communities: CommunityFromApi[]) => void;
  setSearchCommunity: (value: string) => void;
  setIsLoading: (loading: boolean) => void;
};

export const createCommunityStore = (initProps?: Partial<CommunityStore>) =>
  createStore<CommunityStore>()((set) => ({
    communities: [],
    searchCommunity: '',
    isLoading: false,
    ...initProps,

    setCommunities: (communities: CommunityFromApi[]) => set({ communities }),

    setSearchCommunity: (value) => set({ searchCommunity: value }),

    setIsLoading: (loading) => set({ isLoading: loading }),
  }));

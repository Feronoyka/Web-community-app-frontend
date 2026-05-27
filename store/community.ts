import { CommunityFromApi } from '@/types';
import { createStore } from 'zustand';

export type CommunityStore = {
  communities: CommunityFromApi[];
  isLoading: boolean;
  setCommunities: (communities: CommunityFromApi[]) => void;
  setIsLoading: (loading: boolean) => void;
};

export const createCommunityStore = (initProps?: Partial<CommunityStore>) =>
  createStore<CommunityStore>()((set) => ({
    communities: [],
    isLoading: false,
    ...initProps,

    setCommunities: (communities: CommunityFromApi[]) =>
      set((state) => ({
        communities: [...state.communities, ...communities],
      })),

    setIsLoading: (loading) => set({ isLoading: loading }),
  }));

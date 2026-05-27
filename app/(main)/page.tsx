import Communities from '@/components/Communities';
// import { useCommunityStore } from '@/provider/community-provider';
// import { User } from '@/types';

export default function Home() {
  // const queryCommunities = useCommunityStore((state) => state.communities);
  // const isLoading = useCommunityStore((state) => state.isLoading);

  return (
    <>
      <Communities />
    </>
  );
}

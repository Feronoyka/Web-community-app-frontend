import Image from 'next/image';

interface CommunityType {
  backgroundUrl?: string | null;
  name: string;
  discription?: string;
  followerCount: number;
}

function Community({
  backgroundUrl,
  name,
  discription,
  followerCount,
}: CommunityType) {
  return (
    <div className='rounded-xl bg-[#F6BD60] w-110.5 h-120.5 text-center'>
      <Image
        src={backgroundUrl || '/default-community-bg.png'}
        alt={name}
        width={482}
        height={156}
      />
      <h3 className='text-lg font-semibold'>{name}</h3>
      <p className='w-82.75 mx-auto'>{discription}</p>
      <p>{followerCount} Members</p>
    </div>
  );
}

export default Community;

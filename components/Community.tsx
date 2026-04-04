import Image from 'next/image';

interface CommunityType {
  backgroundUrl?: string;
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
    <div className='rounded-xl bg-[#F6BD60] w-[442px] h-[482px] text-center'>
      <Image src={backgroundUrl} alt={backgroundUrl} width={482} height={156} />
      <h3 className='text-lg font-semibold'>{name}</h3>
      <p className='w-[331px] mx-auto'>{discription}</p>
      <p>{followerCount} Members</p>
    </div>
  );
}

export default Community;

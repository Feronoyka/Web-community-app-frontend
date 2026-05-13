import MembersIcon from '@/assets/icons/membersIcon';
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
    <div className='rounded-[10px] bg-(--golden-pollen-100) w-110.5 h-120.5 shadow-(--cartoon-shadow) border-2 border-black)'>
      {backgroundUrl ? (
        <div>
          <Image src={backgroundUrl} alt='' width={439} height={156} />
          <div className='flex bg-[#F8CD86] w-89 h-39 rounded-t-[10px] justify-center'></div>
        </div>
      ) : (
        <div className='flex bg-[#F8CD86] w-109.75 h-39 rounded-t-[10px] justify-center'>
          <div className='bg-(--dusty-grape-100) w-25 h-25 my-25 rounded-[10px]'></div>
        </div>
      )}
      <div className='my-15 text-center'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='w-82.75 mx-auto text-gray-700 mt-3 border-box px-10 break-normal'>
          {discription}
        </p>
        <div className='flex mt-3 justify-center items-center'>
          <MembersIcon width={27} height={27} />
          <p className='text-gray-700 ml-1'>{followerCount} Members</p>
        </div>
      </div>
    </div>
  );
}

export default Community;

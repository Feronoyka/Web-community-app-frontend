import MembersIcon from '@/assets/icons/MembersIcon';
import Image from 'next/image';
import { Button } from './UI';

interface CommunityType {
  ownerId: string;
  backgroundUrl?: string | null;
  name: string;
  discription?: string;
  followerCount: number;
}

interface User {
  id?: string;
  avatarUrl: string;
  nickname: string;
  username: string;
  email: string;
}

async function Community({
  ownerId,
  backgroundUrl,
  name,
  discription,
  followerCount,
  user,
}: CommunityType & { user?: User }) {
  return (
    <div className='rounded-[10px] bg-(--golden-pollen-100) w-110.5 w-max-110.5 h-120.5 shadow-(--cartoon-shadow) border-2 border-black)'>
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
        {ownerId !== user?.id ? (
          <Button
            className='mt-22 px-8 py-1 text-xl'
            buttonType='primary'
            buttonColor='bg-(--steel-blue-50)'
          >
            Follow
          </Button>
        ) : (
          <Button
            className='mt-22 px-8 py-1 text-xl'
            buttonType='primary'
            buttonColor='bg-(--vibrant-coral-100)'
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
}

export default Community;

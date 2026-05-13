import { OutlineIcon } from '@/assets/icons';
import CreateCommunityForm from './CreateCommunityForm';
import Link from 'next/link';

function CreateCommunity() {
  return (
    <div className='bg-white col-start-3 col-end-11 rounded-[10px] pt-9 px-9 shadow-(--cartoon-shadow) border-2'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>Create community</h1>
          <h3 className='text-2xl text-[#808080] w-50 mt-4'>
            Create your own community
          </h3>
        </div>
        <div>
          <Link href='/'>
            <OutlineIcon />
          </Link>
        </div>
      </div>
      <div>
        <CreateCommunityForm />
      </div>
    </div>
  );
}

export default CreateCommunity;

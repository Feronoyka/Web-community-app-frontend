'use client';

import { useActionState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { updateUserProfileAction } from '@/app/profile/edit/[nickname]/action';
import { PRONOUNS_OPTIONS } from '@/utils/enums';
import defaultUser from '@/assets/pictures/default-user.jpg';

type UserType = {
  user: {
    id?: string;
    avatarUrl?: string;
    nickname: string;
    username: string;
    pronouns?: string;
    description?: string;
  };
};

function EditUserProfileForm({ user }: UserType) {
  const [state, action, isPending] = useActionState(
    updateUserProfileAction,
    null,
  );

  const avatarStyle = 'mx-auto rounded-[100%] border-[#D9D9D9] border';
  const inputStyle =
    'w-[359px] py-[7px] outline-1 outline-[#808080] rounded-[10px] pl-4';
  const h3 = 'font-bold text-xl mb-1';
  const errorStyle = 'text-red-500 text-sm';

  return (
    <>
      <form action={action}>
        <div className='flex justify-between'>
          <div>
            <div className='mb-2'>
              <h3 className={h3}>Name</h3>
              <input
                type='text'
                name='username'
                defaultValue={user.username}
                className={inputStyle}
                placeholder={user.username}
              />
              {state?.errors.username && (
                <p className={errorStyle}>{state.errors.username}</p>
              )}
            </div>
            <div className='my-2'>
              <h3 className={h3}>Pronouns</h3>
              <select
                className={inputStyle}
                name='pronouns'
                defaultValue={user.pronouns}
              >
                {PRONOUNS_OPTIONS.map((pronoun) => (
                  <option key={pronoun} value={pronoun}>
                    {pronoun}
                  </option>
                ))}
              </select>
              {state?.errors.pronouns && (
                <p className={errorStyle}>{state.errors.pronouns}</p>
              )}
            </div>
            <div className='mt-2'>
              <h3 className={h3}>Description</h3>
              <input
                type='text'
                defaultValue={user.description}
                name='description'
                className={`pb-[282px] ${inputStyle}`}
                placeholder='I love cute stuff'
              />
              {state?.errors.description && (
                <p className={errorStyle}>{state.errors.description}</p>
              )}
            </div>
          </div>
          <div className='block text-center'>
            <div className='mb-75'>
              {user.avatarUrl ? (
                <Image
                  src={user.avatarUrl}
                  alt=''
                  width={163}
                  height={163}
                  className={avatarStyle}
                />
              ) : (
                <Image
                  src={defaultUser}
                  alt=''
                  width={150}
                  height={150}
                  className={avatarStyle}
                />
              )}
              <p className='text-[#808080] mt-2'>
                {'@'}
                {user.nickname}
              </p>
            </div>
            <div>
              <Link className='mr-2' href={`/profile/${user.nickname}`}>
                Discard
              </Link>
              <button
                className='ml-2 cursor-pointer'
                type='submit'
                disabled={isPending}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditUserProfileForm;

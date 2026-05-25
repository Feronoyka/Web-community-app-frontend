'use client';

import { useActionState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { updateUserProfileAction } from '@/app/profile/edit/[nickname]/action';
import { PRONOUNS_OPTIONS, Pronouns } from '@/utils/enums';
import { DefaultUserIcon } from '@/assets/icons';
import { Button, Input, TextArea } from '../UI';

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
    'w-[360px] py-2 outline-1 outline-[#808080] rounded-[10px] pl-2 mt-1 text-[18px]';
  const h3 = 'font-bold text-xl';
  const errorStyle = 'text-red-500 text-sm';

  return (
    <>
      <form action={action}>
        <div className='flex justify-between'>
          <div>
            <div>
              <h3 className={h3}>Name</h3>
              <Input
                type='text'
                name='username'
                defaultValue={user.username}
                placeholder={user.username}
                className='w-90'
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
                defaultValue={user.pronouns ?? Pronouns.NONE}
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
              <TextArea
                name='description'
                placeholder='I love cute stuff'
                className='max-w-90'
                defaultValue={user.description}
              ></TextArea>
              {state?.errors.description && (
                <p className={errorStyle}>{state.errors.description}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col justify-between text-center'>
            <div className='mb'>
              {user.avatarUrl ? (
                <Image
                  src={user.avatarUrl}
                  alt=''
                  width={163}
                  height={163}
                  className={avatarStyle}
                />
              ) : (
                <DefaultUserIcon width={163} height={163} />
              )}
              <p className='text-[#808080] mt-2 opacity-50'>
                {'@'}
                {user.nickname}
              </p>
            </div>
            <div>
              <Link className='mr-2' href={`/profile/${user.nickname}`}>
                <Button
                  buttonType='primary'
                  buttonColor='bg-(--vibrant-coral-100)'
                >
                  Discard
                </Button>
              </Link>
              <Button
                className='ml-2 cursor-pointer'
                type='submit'
                buttonType='primary'
                buttonColor='bg-(--dusty-grape-50)'
                disabled={isPending}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditUserProfileForm;

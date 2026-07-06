'use client';

import { useActionState, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { updateUserProfileAction } from '@/app/profile/[id]/edit/action';
import { PRONOUNS_OPTIONS, Pronouns } from '@/utils/enums';
import { DefaultUserIcon } from '@/assets/icons';
import { Button, Input, TextArea } from '../UI';
import { User } from '@/types';
import Camera from '@/assets/icons/Camera';
import { useRouter } from 'next/navigation';

function EditUserProfileForm({ currentUser }: { currentUser: User }) {
  const router = useRouter();

  const [state, action, isPending] = useActionState(
    updateUserProfileAction,
    null,
  );
  const [previewUrl, setPreviewUrl] = useState(currentUser.avatarUrl ?? '');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreviewUrl(URL.createObjectURL(file));
  };

  const inputStyle =
    'w-81 py-2 outline-1 outline-[#808080] rounded-[10px] pl-2 mt-1 text-[18px]';
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
                defaultValue={currentUser.username}
                placeholder={currentUser.username}
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
                defaultValue={currentUser.pronouns ?? Pronouns.NONE}
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
                defaultValue={currentUser.description}
              ></TextArea>
              {state?.errors.description && (
                <p className={errorStyle}>{state.errors.description}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col justify-between text-center items-center'>
            <div className='mb'>
              <label className='relative group rounded-full block cursor-pointer w-40.75 h-40.75 overflow-hidden'>
                <input
                  type='file'
                  accept='image/*'
                  className='hidden'
                  name='avatarUrl'
                  onChange={handleFileChange}
                />
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt=''
                    fill
                    className='rounded-full object-cover z-0 border-[#D9D9D9] border'
                  />
                ) : (
                  <DefaultUserIcon
                    width={163}
                    height={163}
                    className='group relative'
                  />
                )}
                <div className='absolute text-white inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <Camera />
                  <p className='center font-bold text-xl'>Upload</p>
                </div>
              </label>
              <p className='text-[#808080] mt-2 opacity-50'>
                {'@'}
                {currentUser.nickname}
              </p>
            </div>
            <div>
              <Button
                buttonType='tertiary'
                className='mr-2'
                onClick={() => router.back()}
              >
                Discard
              </Button>
              <Button
                className='ml-2 cursor-pointer w-20 hover:shadow-(--cartoon-shadow-50)'
                type='submit'
                buttonType='secondaryTwo'
                disabled={isPending}
              >
                {isPending ? <p>Saving...</p> : <p>Save</p>}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditUserProfileForm;

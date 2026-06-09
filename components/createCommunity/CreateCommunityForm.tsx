'use client';

import { useState, useActionState, ChangeEvent } from 'react';
import { Button, Input, TextArea } from '../UI';
import { createCommunityAction } from '@/app/community-create/actions';
import Image from 'next/image';
import Link from 'next/link';
import DefaultMembers from '@/assets/pictures/DefaultMembers.jpg';

function CreateCommunityForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [state, action, isPending] = useActionState(
    createCommunityAction,
    null,
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const localUrl = URL.createObjectURL(file);
      console.log('Generated Preview url:', localUrl);
      setPreviewUrl(localUrl);
    }
  };

  return (
    <>
      <form action={action}>
        <div className='flex justify-between mt-10'>
          <div>
            <p className='text-[20px] font-bold'>Name</p>
            <Input
              name='communityName'
              placeholder='Community name'
              onChange={(event) => setName(event.target?.value)}
              minLength={3}
              maxLength={30}
            />
            {state?.errors.name && <p>{state.errors.name}</p>}
            <p className='text-[20px] font-bold mt-4'>Description</p>
            <TextArea
              name='communityDescription'
              placeholder='Community description'
              onChange={(event) => setDescription(event.target.value)}
              maxLenght={650}
            ></TextArea>
            {state?.errors.description && <p>{state.errors.description}</p>}
          </div>
          <div className='bg-(--golden-pollen-100) w-89.75 h-120.75 rounded-[10px] shadow-(--cartoon-shadow) border-2'>
            <div className='flex bg-(--golden-pollen-50) w-89 h-39 rounded-t-[10px] justify-center'>
              <label className='relative my-25 block cursor-pointer group w-25 h-25 border border-gray-600 rounded-[10px] overflow-hidden'>
                <input
                  type='file'
                  accept='image/*'
                  className='hidden'
                  name='avatarUrl'
                  onChange={handleFileChange}
                />
                {previewUrl ? (
                  <>
                    <Image
                      src={previewUrl}
                      alt=''
                      // width={100}
                      // height={100}
                      fill
                      className='rounded-[10px] object-cover z-0'
                    />
                    <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </>
                ) : (
                  <Image
                    src={DefaultMembers}
                    alt=''
                    fill
                    className='rounded-[10px] object-cover z-0'
                  />
                )}
              </label>
            </div>
            <div className='text-center my-15'>
              {name ? (
                <h3 className='text-2xl font-bold'>{name}</h3>
              ) : (
                <h3 className='text-2xl font-bold'>Name</h3>
              )}
              {description ? (
                <p className='text-gray-700 mt-3 border-box px-10 break-normal'>
                  {description}
                </p>
              ) : (
                <p className='text-gray-700 mt-3'>Description</p>
              )}
            </div>
          </div>
        </div>
        <div className='flex justify-between mb-4 mt-4'>
          <Link href='/'>
            <Button
              buttonType='primary'
              buttonColor='bg-(--vibrant-coral-100)'
              className='w-20'
            >
              Discard
            </Button>
          </Link>
          <Button
            type='submit'
            buttonType='primary'
            buttonColor='bg-(--dusty-grape-50)'
            disabled={isPending}
            className='w-20'
          >
            {isPending ? <p>Creating...</p> : <p>Create</p>}
          </Button>
        </div>
      </form>
    </>
  );
}

export default CreateCommunityForm;

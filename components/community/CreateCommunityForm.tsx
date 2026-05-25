'use client';

import { useState, useActionState } from 'react';
import { Button, Input, TextArea } from '../UI';
import { createCommunityAction } from '@/app/community-create/actions';

function CreateCommunityForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [state, action, isPending] = useActionState(
    createCommunityAction,
    null,
  );

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
              <div className='bg-(--dusty-grape-100) w-25 h-25 my-25 rounded-[10px]'></div>
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
          <Button buttonType='secondary' buttonColor='bg-(--vibrant-coral-100)'>
            Discard
          </Button>
          <Button
            type='submit'
            buttonType='primary'
            buttonColor='bg-(--dusty-grape-50)'
            disabled={isPending}
          >
            Create
          </Button>
        </div>
      </form>
    </>
  );
}

export default CreateCommunityForm;

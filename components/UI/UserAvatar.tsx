import Image from 'next/image';
import { DefaultUser } from '@/assets/icons';

function UserAvatar({
  avatarUrl,
  className,
  width = 163,
  height = 163,
}: {
  avatarUrl?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <>
      <label
        className={`relative group rounded-full block cursor-pointer w-[${width}px] h-[${height}px] overflow-hidden`}
      >
        {/* <input
          type='file'
          accept='image/*'
          className='hidden'
          name='avatarUrl'
          // onChange={handleFileChange}
        /> */}
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt=''
            fill
            className={`rounded-full object-cover z-0 border-[#D9D9D9] border ${className}`}
          />
        ) : (
          <DefaultUser
            width={width}
            height={height}
            className={`group relative ${className}`}
          />
        )}
      </label>
    </>
  );
}

export default UserAvatar;

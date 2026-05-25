import { Icon } from '@/types';

const KeyIcon = ({ className, onClick, height = 157, width = 157 }: Icon) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox='0 0 157 157'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M103.031 34.3438C113.87 34.3438 122.656 43.1302 122.656 53.9688M142.281 53.9688C142.281 75.6459 124.708 93.2188 103.031 93.2188C100.737 93.2188 98.4883 93.0219 96.3018 92.6441C92.6187 92.0077 88.7182 92.8131 86.0753 95.456L68.6875 112.844H53.9688V127.562H39.25V142.281H14.7188V123.847C14.7188 119.943 16.2695 116.199 19.0298 113.439L61.544 70.9247C64.1869 68.2818 64.9923 64.3813 64.3559 60.6982C63.9781 58.5117 63.7812 56.2632 63.7812 53.9688C63.7812 32.2916 81.3541 14.7188 103.031 14.7188C124.708 14.7188 142.281 32.2916 142.281 53.9688Z'
        stroke='#666666'
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default KeyIcon;

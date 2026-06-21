import { Icon } from '@/types';

const ArrowLeft = ({ className, onClick, height = 26, width = 26 }: Icon) => (
  <svg
    onClick={onClick}
    className={`cursor-pointer ${className} hover:bg-gray-300 rounded-[10px]`}
    width={width}
    height={height}
    viewBox='0 0 26 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.375 4.875L3.25 13M3.25 13L11.375 21.125M3.25 13H22.75'
      stroke='#0F172A'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowLeft;

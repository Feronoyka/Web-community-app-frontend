import { Icon } from '@/types';

function Logout({ className, onClick, width = 32, height = 32 }: Icon) {
  return (
    <>
      <svg
        className={`mr-2 ${className}`}
        onClick={onClick}
        width={width}
        height={height}
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 12V7C11 5.34315 12.3431 4 14 4H22C23.6569 4 25 5.34315 25 7V25C25 26.6569 23.6569 28 22 28H14C12.3431 28 11 26.6569 11 25V20M7 12L3 16L7 20M3 16L20 16'
          stroke='#0F172A'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  );
}

export default Logout;

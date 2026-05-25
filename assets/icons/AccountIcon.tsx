import { Icon } from '@/types';

function AccountIcon({ className, onClick, width = 32, height = 32 }: Icon) {
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
          d='M13.3333 19.9999H8C6.58552 19.9999 5.22896 20.5618 4.22877 21.562C3.22857 22.5622 2.66667 23.9188 2.66667 25.3332V27.9999M19.0733 22.0399L20.304 21.5306M20.304 18.4692L19.0733 17.9586M22.4693 16.3039L21.9587 15.0732M22.4693 23.6959L21.9587 24.9279M25.5307 16.3039L26.0413 15.0732M26.04 24.9279L25.5307 23.6959M27.696 18.4692L28.928 17.9586M27.696 21.5306L28.928 22.0412'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M24 24C26.2091 24 28 22.2091 28 20C28 17.7909 26.2091 16 24 16C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24Z'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 14.6667C14.9455 14.6667 17.3333 12.2789 17.3333 9.33333C17.3333 6.38781 14.9455 4 12 4C9.05449 4 6.66667 6.38781 6.66667 9.33333C6.66667 12.2789 9.05449 14.6667 12 14.6667Z'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  );
}

export default AccountIcon;

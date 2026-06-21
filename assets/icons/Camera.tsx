import { Icon } from '@/types';

function Camera({ className, onClick, width = 32, height = 32 }: Icon) {
  return (
    <>
      <svg
        className={`${className}`}
        onClick={onClick}
        width={width}
        height={height}
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.10251 8.2332C8.62107 9.00471 7.81503 9.51197 6.91467 9.63992C6.40874 9.71182 5.90471 9.78963 5.40266 9.87329C3.99882 10.1072 3 11.3422 3 12.7654V24C3 25.6569 4.34315 27 6 27H26C27.6569 27 29 25.6569 29 24V12.7654C29 11.3422 28.0012 10.1072 26.5973 9.8733C26.0953 9.78964 25.5913 9.71183 25.0853 9.63993C24.185 9.51198 23.3789 9.00472 22.8975 8.23321L21.8025 6.47852C21.2979 5.66982 20.4392 5.14451 19.4873 5.0934C18.3328 5.0314 17.17 5 16 5C14.83 5 13.6672 5.0314 12.5127 5.0934C11.5608 5.14451 10.7021 5.66982 10.1975 6.47852L9.10251 8.2332Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M22 17C22 20.3137 19.3137 23 16 23C12.6863 23 10 20.3137 10 17C10 13.6863 12.6863 11 16 11C19.3137 11 22 13.6863 22 17Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25 14H25.01V14.01H25V14Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  );
}

export default Camera;

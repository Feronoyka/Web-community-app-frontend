import { Icon } from '@/types';

function SendIcon({ width = 32, height = 32, className, onClick }: Icon) {
  return (
    <>
      <svg
        width={width}
        height={height}
        className={`cursor-pointer ${className}`}
        onClick={onClick}
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM21.7071 16.7071C21.8946 16.5196 22 16.2652 22 16C22 15.7348 21.8946 15.4804 21.7071 15.2929L17.7071 11.2929C17.3166 10.9024 16.6834 10.9024 16.2929 11.2929C15.9024 11.6834 15.9024 12.3166 16.2929 12.7071L18.5858 15L11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17L18.5858 17L16.2929 19.2929C15.9024 19.6834 15.9024 20.3166 16.2929 20.7071C16.6834 21.0976 17.3166 21.0976 17.7071 20.7071L21.7071 16.7071Z'
          fill='#0F172A'
        />
      </svg>
    </>
  );
}

export default SendIcon;

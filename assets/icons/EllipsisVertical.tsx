import { Icon } from '@/types';

function EllipsisVertical({
  width = 40,
  height = 40,
  className,
  onClick,
}: Icon) {
  return (
    <>
      <svg
        width={width}
        height={height}
        className={`cursor-pointer ${className}`}
        onClick={onClick}
        viewBox='0 0 45 45'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g opacity='0.65'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.6875 11.25C19.6875 9.6967 20.9467 8.4375 22.5 8.4375C24.0533 8.4375 25.3125 9.6967 25.3125 11.25C25.3125 12.8033 24.0533 14.0625 22.5 14.0625C20.9467 14.0625 19.6875 12.8033 19.6875 11.25ZM19.6875 22.5C19.6875 20.9467 20.9467 19.6875 22.5 19.6875C24.0533 19.6875 25.3125 20.9467 25.3125 22.5C25.3125 24.0533 24.0533 25.3125 22.5 25.3125C20.9467 25.3125 19.6875 24.0533 19.6875 22.5ZM19.6875 33.75C19.6875 32.1967 20.9467 30.9375 22.5 30.9375C24.0533 30.9375 25.3125 32.1967 25.3125 33.75C25.3125 35.3033 24.0533 36.5625 22.5 36.5625C20.9467 36.5625 19.6875 35.3033 19.6875 33.75Z'
            fill='#0F172A'
          />
        </g>
      </svg>
    </>
  );
}

export default EllipsisVertical;

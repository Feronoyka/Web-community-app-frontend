const AddIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      className={className}
      onChange={onClick}
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' rx='20' fill='#F6BD60' />
      <path
        d='M26 15.7725V23H33.2275V26H26V33.2275H23V26H15.7725V23H23V15.7725H26Z'
        fill='black'
      />
    </svg>
  );
};

export default AddIcon;

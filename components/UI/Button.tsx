type Button = {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
  children: string;
  disabled?: boolean;
};

function Button({ type, onClick, className, children, disabled }: Button) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`text-white text-[18px] font-bold bg-[#6C938A] rounded-[10px] py-2.25 cursor-pointer ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}

export default Button;

type Input = {
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  disabled?: boolean;
};

function Input({ type, placeholder, className, name, disabled }: Input) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${className} mt-1 border border-[#808080] focus:outline-none rounded-[10px] py-2 pl-3 w-[325px] text-[18px]`}
        disabled={disabled}
      />
    </>
  );
}

export default Input;

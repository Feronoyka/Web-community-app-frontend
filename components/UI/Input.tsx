type Input = {
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  disabled?: boolean;
  onChange?: ({ ...props }) => void;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
};

function Input({
  type = 'text',
  placeholder,
  className,
  name,
  disabled,
  onChange,
  minLength,
  maxLength,
  defaultValue,
}: Input) {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} mt-1 border border-[#808080] focus:outline-none rounded-[10px] py-2 pl-3 w-full text-[18px]`}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        defaultValue={defaultValue}
      />
    </>
  );
}

export default Input;

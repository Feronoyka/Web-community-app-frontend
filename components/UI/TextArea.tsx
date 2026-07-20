type TextArea = {
  placeholder?: string;
  className?: string;
  name?: string;
  onChange?: ({ ...props }) => void;
  maxLenght?: number;
  minLength?: number;
  defaultValue?: string;
};

function TextArea({
  placeholder,
  className,
  name,
  onChange,
  maxLenght,
  minLength,
  defaultValue,
}: TextArea) {
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`${className} mt-1 border border-[#808080] focus:outline-none rounded-[10px] resize-none overflow-y-hidden border-box w-full pt-3 px-3 text-[18px]`}
        onChange={onChange}
        maxLength={maxLenght}
        minLength={minLength}
        defaultValue={defaultValue}
      ></textarea>
    </>
  );
}

export default TextArea;

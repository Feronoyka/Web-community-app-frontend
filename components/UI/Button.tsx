type Button = {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  buttonType: 'primary' | 'secondaryOne' | 'secondaryTwo' | 'tertiary';
};

function Button({
  buttonType,
  type,
  onClick,
  className,
  children,
  disabled,
}: Button) {
  const Button = () => {
    switch (buttonType) {
      case 'primary':
        return (
          <button
            type={type}
            onClick={onClick}
            className={`text-white text-[18px] bg-(--steel-blue-50) font-bold rounded-[10px] border-black border-2 py-2.25 cursor-pointer shadow-(--cartoon-shadow) ${className}`}
            disabled={disabled}
          >
            {children}
          </button>
        );

      case 'secondaryOne':
        return (
          <button
            type={type}
            onClick={onClick}
            className={`text-white bg-(--steel-blue-50) font-bold rounded-[10px] border-black border text-center cursor-pointer shadow-(--cartoon-shadow) px-8 py-1 text-xl ${className} hover:shadow-(--cartoon-shadow-50)`}
            disabled={disabled}
          >
            {children}
          </button>
        );

      case 'secondaryTwo':
        return (
          <button
            type={type}
            onClick={onClick}
            className={`text-white w-20 font-bold bg-(--dusty-grape-50) rounded-[15px] border-black border py-0.5 cursor-pointer shadow-(--cartoon-shadow) ${className} hover:shadow-(--cartoon-shadow-50)`}
            disabled={disabled}
          >
            {children}
          </button>
        );

      case 'tertiary':
        return (
          <button
            type={type}
            onClick={onClick}
            className={`text-white w-20 font-bold bg-(--vibrant-coral-100) rounded-[15px] border-black border py-0.5 cursor-pointer shadow-(--cartoon-shadow) ${className} hover:shadow-(--cartoon-shadow-50)`}
            disabled={disabled}
          >
            {children}
          </button>
        );
    }
  };

  return <>{Button()}</>;
}

export default Button;

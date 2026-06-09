import Link from 'next/link';

type Button = {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  buttonType: 'primary' | 'primaryAction' | 'secondary';
  buttonColor:
    | 'bg-(--steel-blue-50)'
    | 'bg-(--vibrant-coral-100)'
    | 'bg-(--dusty-grape-50)'
    | 'bg-linear-50 from-(--vibrant-coral-100) to-(--steel-blue-100)';
};

function Button({
  buttonType,
  type,
  onClick,
  className,
  children,
  disabled,
  buttonColor,
}: Button) {
  const Button = () => {
    switch (buttonType) {
      case 'primaryAction':
        return (
          <button
            type={type}
            onClick={onClick}
            className={`text-white text-[18px] ${buttonColor} font-bold rounded-[10px] border-black border-2 py-2.25 cursor-pointer shadow-(--cartoon-shadow) ${className}`}
            disabled={disabled}
          >
            {children}
          </button>
        );

      case 'primary':
        return (
          <button
            type={type}
            onClick={onClick}
            className={`text-white ${buttonColor} font-bold rounded-[15px] border-black border py-0.5 text-center cursor-pointer shadow-(--cartoon-shadow) ${className}`}
            disabled={disabled}
          >
            {children}
          </button>
        );

      case 'secondary':
        return (
          <button
            type={type}
            onClick={onClick}
            className={`text-white font-bold ${buttonColor} rounded-[15px] border-black border py-0.5 w-25 cursor-pointer shadow-(--cartoon-shadow) ${className}`}
            disabled={disabled}
          >
            <Link href='/'>{children}</Link>
          </button>
        );
    }
  };

  return <>{Button()}</>;
}

export default Button;

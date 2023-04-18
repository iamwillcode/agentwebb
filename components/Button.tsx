import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant = 'primary', href, className, children, onClick }: ButtonProps) {
  const baseStyles = 'inline-flex items-center no-underline px-2.5 py-1.5  justify-center text-white  body-small border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
    tertiary: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
  };
  const buttonClasses = clsx(baseStyles, variantStyles[variant], className);
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    );
  }
}

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export function Button({ children, className = '', ...rest }: ButtonProps) {
  const buttonClasses = `${styles.button} ${className}`;

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}

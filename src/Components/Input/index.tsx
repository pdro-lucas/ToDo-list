import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ type, ...props }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input type={type} {...props} />
    </div>
  );
}

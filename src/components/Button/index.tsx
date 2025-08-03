import S from './styles.module.css';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ReactNode } from 'react';
import { CircularProgress } from '@mui/material';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'red' | 'white';
  className?: React.HTMLAttributes<HTMLButtonElement>['className'];
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { color = 'primary', className, children, loading, disabled, ...rest },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(S.button, S[color], className)}
        {...rest}
      >
        {loading && <CircularProgress size={22} className={S.loading} />}
        {!loading && children}
      </button>
    );
  }
);

export default Button;

import clsx from 'clsx';
import S from './styeles.module.css';

interface BadgeProps {
  children: React.ReactNode;
  type?: 'success' | 'error' | 'warning';
}

export const Badge = ({ children, type = 'success' }: BadgeProps) => {
  return <div className={clsx(S.badge, S[type])}>{children}</div>;
};

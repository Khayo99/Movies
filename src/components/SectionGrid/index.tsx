import { IconType } from 'react-icons/lib';
import S from './styles.module.css';
import React from 'react';

interface SectionGridProps {
  title: string;
  icon?: IconType;
  children: React.ReactNode;
}

export const SectionGrid = ({ title, icon, children }: SectionGridProps) => {
  return (
    <section className={S.section}>
      <h2 className={S.sectionTitle}>
        {title}

        {icon && React.createElement(icon, { size: 20 })}
      </h2>
      <div className={S.gridContent}>{children}</div>
    </section>
  );
};

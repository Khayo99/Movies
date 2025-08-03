import S from './styles.module.css';

interface SectionGridProps {
  title: string;
  children: React.ReactNode;
}

export const SectionGrid = ({ title, children }: SectionGridProps) => {
  return (
    <section className={S.section}>
      <h2 className={S.sectionTitle}>{title}</h2>
      <div className={S.gridContent}>{children}</div>
    </section>
  );
};

import S from './styles.module.css';

import { MovieCard } from '@/components/MovieCard';

export default function HomePage() {
  return (
    <div className="">
      <section className={S.section}>
        <h2 className={S.sectionTitle}>Lançamentos</h2>

        <div className={S.sectionContent}>
          <MovieCard />
        </div>
      </section>
    </div>
  );
}

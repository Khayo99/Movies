import { useNowPlaying } from '@/hooks/api/useNowPlaying';
import S from './styles.module.css';

import { MovieCard } from '@/components/MovieCard';

export default function HomePage() {
  const { data: nowPlaying } = useNowPlaying();

  console.log('Now Playing:', nowPlaying);

  return (
    <div className="">
      <section className={S.section}>
        <h2 className={S.sectionTitle}>Lançamentos</h2>

        <div className={S.sectionContent}>
          {nowPlaying?.results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </div>
  );
}

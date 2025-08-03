import S from './styles.module.css';

import { useNowPlaying } from '@/hooks/api/useNowPlaying';

import { MovieCard } from '@/components/MovieCard';
import { SectionMovies } from '@/components/SectionMovies';

export default function HomePage() {
  const { data: nowPlaying } = useNowPlaying();

  return (
    <div className="">
      <SectionMovies title="Em Lançamento">
        {nowPlaying?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SectionMovies>
    </div>
  );
}

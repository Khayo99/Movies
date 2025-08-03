import S from './styles.module.css';

import { useNowPlaying } from '@/hooks/api/useNowPlaying';

import { MovieCard } from '@/components/MovieCard';
import { SectionMovies } from '@/components/SectionMovies';
import { useGenres } from '@/hooks/api/useGenres';

export default function HomePage() {
  const { data: DataNowPlaying } = useNowPlaying();

  const { data: DataGenres } = useGenres({
    with_genres: 10749,
    sort_by: 'popularity.desc',
  });

  return (
    <div className={S.container}>
      <SectionMovies title="Em lançamento">
        {DataNowPlaying?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SectionMovies>

      <SectionMovies title="Filmes românticos">
        {DataGenres?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SectionMovies>
    </div>
  );
}

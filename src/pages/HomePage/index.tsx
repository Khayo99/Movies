import S from './styles.module.css';

import { useNowPlaying } from '@/hooks/api/useNowPlaying';

import { MovieCard } from '@/components/MovieCard';
import { SectionMovies } from '@/components/SectionMovies';
import { SectionGrid } from '@/components/SectionGrid';
import { useGenres } from '@/hooks/api/useGenres';
import { useTrendingMovies } from '@/hooks/api/useTrending';
import { TrendingCarousel } from '@/components/TrendingCarousel';
import { useNavigate } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';

export default function HomePage() {
  const navigate = useNavigate();

  const { data: DataNowPlaying, isLoading: isLoadingNowPlaying } =
    useNowPlaying();
  const { data: DataTrending, isLoading: isLoadingTrending } =
    useTrendingMovies();

  const { data: DataGenres } = useGenres({
    with_genres: 10749,
    sort_by: 'popularity.desc',
  });

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movieDetails/${movie.id}`);
  };

  return (
    <div className={S.container}>
      <TrendingCarousel
        movies={DataTrending?.results || DataNowPlaying?.results || []}
        isLoading={isLoadingTrending && isLoadingNowPlaying}
      />

      <SectionGrid title="Tendências" icon={FaFire}>
        {DataTrending?.results
          .slice(0, 12)
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              cardImage={`${import.meta.env.VITE_IMAGE_BASE_URL}${movie.backdrop_path}`}
              handleClick={handleMovieClick}
            />
          ))}
      </SectionGrid>

      <SectionMovies title="Em lançamento">
        {DataNowPlaying?.results.map((movie) => (
          <div key={movie.id} className={S.sectionMovies}>
            <MovieCard movie={movie} handleClick={handleMovieClick} />
          </div>
        ))}
      </SectionMovies>

      <SectionMovies title="Filmes românticos">
        {DataGenres?.results.map((movie) => (
          <div key={movie.id} className={S.sectionMovies}>
            <MovieCard movie={movie} handleClick={handleMovieClick} />
          </div>
        ))}
      </SectionMovies>
    </div>
  );
}

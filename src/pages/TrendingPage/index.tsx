import S from './styles.module.css';

import { useTrendingMovies } from '@/hooks/api/useTrending';
import { MovieCard } from '@/components/MovieCard';
import { useNavigate } from 'react-router-dom';

export default function TrendingPage() {
  const navigate = useNavigate();
  const { data: DataTrending, isLoading } = useTrendingMovies();

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movieDetails/${movie.id}`);
  };

  if (isLoading) {
    return (
      <div className={S.container}>
        <div className={S.loading}>Carregando filmes em tendência...</div>
      </div>
    );
  }

  return (
    <div className={S.container}>
      <h1 className={S.title}>Tendências</h1>
      <div className={S.moviesGrid}>
        {DataTrending?.results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleClick={handleMovieClick}
          />
        ))}
      </div>
    </div>
  );
}

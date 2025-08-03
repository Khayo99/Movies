import S from './styles.module.css';

import { useTrendingMovies } from '@/hooks/api/useTrending';
import { MovieCard } from '@/components/MovieCard';
import { useNavigate } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';

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
      <div className={S.title}>
        <h1>Tendências</h1>
        <FaFire size={24} />
      </div>

      <div className={S.moviesGrid}>
        {DataTrending?.results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            cardImage={`${import.meta.env.VITE_IMAGE_BASE_URL}${movie.backdrop_path}`}
            handleClick={handleMovieClick}
          />
        ))}
      </div>
    </div>
  );
}

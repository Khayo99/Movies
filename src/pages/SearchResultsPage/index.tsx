import S from './styles.module.css';
import { useSearchParams } from 'react-router-dom';
import { MovieCard } from '@/components/MovieCard';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '@/hooks/api/useSearch';
import { CircularProgress } from '@mui/material';

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  const { data: searchData, isLoading, error } = useSearch(query);
  const movies = searchData?.results || [];

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movieDetails/${movie.id}`);
  };

  if (isLoading) {
    return (
      <div className={S.container}>
        <div className={S.loading}>
          <CircularProgress className="text-white" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={S.container}>
        <div className={S.noResults}>
          <p>Erro ao buscar filmes</p>
          <p>Tente novamente mais tarde</p>
        </div>
      </div>
    );
  }

  if (!query) {
    return (
      <div className={S.container}>
        <div className={S.noResults}>
          <p>Digite algo para buscar filmes</p>
        </div>
      </div>
    );
  }

  return (
    <div className={S.container}>
      <h1 className={S.title}>
        Resultados para: <span className={S.query}>"{query}"</span>
      </h1>

      {movies.length > 0 ? (
        <div className={S.resultsGrid}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleClick={handleMovieClick}
            />
          ))}
        </div>
      ) : (
        <div className={S.noResults}>
          <p>Nenhum filme encontrado para "{query}"</p>
          <p>Tente buscar com outras palavras-chave</p>
        </div>
      )}
    </div>
  );
}

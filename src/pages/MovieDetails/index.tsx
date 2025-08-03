import { useParams } from 'react-router-dom';
import S from './styles.module.css';
import { useMovieDetails } from '@/hooks/api/useMovie';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: movieDetails } = useMovieDetails(Number(id));

  console.log(movieDetails);

  return <div className={S.container}>movie details page</div>;
}

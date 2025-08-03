import S from './styles.module.css';
import { formatDate } from '@/utils/dateFormat';

import { IoCalendar } from 'react-icons/io5';
import { Badge } from '../Badge';
import { FaStar } from 'react-icons/fa';

interface MovieCardProps {
  movie: Movie;
  cardImage?: string;
  handleClick?: (movie: Movie) => void;
}

export const MovieCard = ({
  movie,
  cardImage,
  handleClick,
}: MovieCardProps) => {
  return (
    <div className={S.movieCard} onClick={() => handleClick?.(movie)}>
      <div className={S.wrapper}>
        <section className={S.content}>
          <img
            src={
              cardImage ??
              `${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`
            }
            alt="Poster Filme"
          />

          <div className={S.containerBadge}>
            <Badge type={movie.vote_average >= 6 ? 'success' : 'error'}>
              <FaStar />
              {movie.vote_average.toFixed(1)}
            </Badge>
          </div>
        </section>

        <footer className={S.footer}>
          <h3 className={S.title}>{movie.title}</h3>

          <div className={S.date}>
            <IoCalendar size={20} />

            <span>{formatDate(movie.release_date)}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

import S from './styles.module.css';
import { formatDate } from '@/utils/dateFormat';

import { IoCalendar } from 'react-icons/io5';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className={S.movieCard}>
      <div className={S.wrapper}>
        <section className={S.content}>
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`}
            alt="Poster Filme"
          />
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

import React from 'react';
import S from './styles.module.css';
import { formatDate } from '@/utils/dateFormat';
import { OptimizedImage } from '@/components/OptimizedImage';

import { IoCalendar } from 'react-icons/io5';
import { Badge } from '../Badge';
import { FaStar } from 'react-icons/fa';

interface MovieCardProps {
  movie: Movie;
  cardImage?: string;
  handleClick?: (movie: Movie) => void;
}

export const MovieCard = React.memo(
  ({ movie, cardImage, handleClick }: MovieCardProps) => {
    const imageUrl =
      cardImage ?? `${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`;

    return (
      <div className={S.movieCard} onClick={() => handleClick?.(movie)}>
        <div className={S.wrapper}>
          <section className={S.content}>
            <OptimizedImage
              src={imageUrl}
              alt={`Poster do filme ${movie.title}`}
              className="w-full h-full"
              loading="lazy"
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
  }
);

MovieCard.displayName = 'MovieCard';

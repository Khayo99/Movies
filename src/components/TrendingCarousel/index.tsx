import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import S from './styles.module.css';
import { FaInfoCircle, FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface TrendingCarouselProps {
  movies: Movie[];
  isLoading?: boolean;
}

export const TrendingCarousel = ({
  movies,
  isLoading = false,
}: TrendingCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (movies.length === 0 || isLoading) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.min(movies.length, 4));
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length, isLoading]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleSlideChange(
          currentSlide === 0 ? displayMovies.length - 1 : currentSlide - 1
        );
      } else if (e.key === 'ArrowRight') {
        handleSlideChange((currentSlide + 1) % displayMovies.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movieDetails/${movie.id}`);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-green-400';
    if (rating >= 6) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (isLoading) {
    return (
      <div className={S.carouselContainer}>
        <div className={`${S.carouselWrapper} ${S.loadingState}`}>
          <div className={S.loadingContent}>
            <div className={S.loadingSpinner}></div>
            <p className={S.loadingText}>Carregando tendências...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!movies || movies.length === 0) return null;

  const displayMovies = movies.slice(0, 4);
  const currentMovie = displayMovies[currentSlide];

  return (
    <div className={S.carouselContainer}>
      <div className={S.carouselWrapper}>
        <div className={S.slideBackground}>
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}${currentMovie.backdrop_path}`}
            alt={currentMovie.title}
            className={S.backgroundImage}
          />
          <div className={S.gradientOverlay} />
        </div>

        <div className={S.carouselContent}>
          <div className={S.badgeContainer}>
            <span className={S.trendingBadge}>
              🔥 Tendência #{currentSlide + 1}
            </span>
          </div>

          <h1 className={S.movieTitle}>{currentMovie.title}</h1>

          <div className={S.movieMeta}>
            <div className={S.rating}>
              <span className={S.star}>
                <FaStar />
              </span>

              <span
                className={`${S.ratingValue} ${getRatingColor(currentMovie.vote_average)}`}
              >
                {currentMovie.vote_average.toFixed(1)}
              </span>
            </div>

            <span className={S.year}>
              {new Date(currentMovie.release_date).getFullYear()}
            </span>
          </div>

          <p className={S.movieOverview}>{currentMovie.overview}</p>

          <div className={S.actionButtons}>
            <button
              className={S.watchButton}
              onClick={() => handleMovieClick(currentMovie)}
            >
              <FaInfoCircle />
              Ver detalhes
            </button>
          </div>
        </div>

        <div className={S.dotsContainer}>
          {displayMovies.map((_, index) => (
            <button
              key={index}
              className={`${S.dot} ${currentSlide === index ? S.activeDot : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={`${S.navButton} ${S.prevButton}`}
          onClick={() =>
            handleSlideChange(
              currentSlide === 0 ? displayMovies.length - 1 : currentSlide - 1
            )
          }
          aria-label="Slide anterior"
        >
          <IoIosArrowBack />
        </button>

        <button
          className={`${S.navButton} ${S.nextButton}`}
          onClick={() =>
            handleSlideChange((currentSlide + 1) % displayMovies.length)
          }
          aria-label="Próximo slide"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

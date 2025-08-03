import { useParams, useNavigate } from 'react-router-dom';
import S from './styles.module.css';
import { useMovieDetails } from '@/hooks/api/useMovie';
import { formatDate } from '@/utils/dateFormat';
import Button from '@/components/Button';
import { CircularProgress } from '@mui/material';
import { FaArrowLeft, FaPlay, FaRegBookmark, FaStar } from 'react-icons/fa';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: movieDetails,
    isLoading,
    isError,
  } = useMovieDetails(Number(id));

  if (isLoading) {
    return (
      <div className={S.loadingState}>
        <CircularProgress size={50} sx={{ color: 'white' }} />
      </div>
    );
  }

  if (isError || !movieDetails) {
    return (
      <div className={S.errorState}>
        <div className={S.errorMessage}>Erro ao carregar detalhes do filme</div>
        <Button onClick={() => navigate(-1)} className={S.backButton}>
          Voltar
        </Button>
      </div>
    );
  }

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}min` : `${mins}min`;
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-green-400';
    if (rating >= 6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const handleWatchNow = () => {
    console.log('Assistir filme:', movieDetails.title);
  };

  const handleAddToWatchlist = () => {
    console.log('Adicionar à lista:', movieDetails.title);
  };

  return (
    <div className={S.container}>
      <section className={S.heroSection}>
        {movieDetails.backdrop_path && (
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            className={S.backdropImage}
          />
        )}
        <div className={S.gradientOverlay} />

        <div className={S.heroContent}>
          <div className={S.titleSection}>
            <h1 className={S.title}>{movieDetails.title}</h1>
            {movieDetails.tagline && (
              <p className={S.tagline}>"{movieDetails.tagline}"</p>
            )}
          </div>

          <div className={S.metaInfo}>
            <div className={S.rating}>
              <span className={S.star}>
                <FaStar />
              </span>

              <span
                className={`${S.ratingValue} ${getRatingColor(movieDetails.vote_average)}`}
              >
                {movieDetails.vote_average.toFixed(1)}
              </span>

              <span className={S.ratingValue}>
                ({movieDetails.vote_count.toLocaleString()} avaliações)
              </span>
            </div>

            <span className={S.year}>
              {new Date(movieDetails.release_date).getFullYear()}
            </span>

            {movieDetails.runtime && (
              <span className={S.runtime}>
                {formatRuntime(movieDetails.runtime)}
              </span>
            )}

            {movieDetails.adult && <span className={S.adultRating}>18+</span>}
          </div>

          {movieDetails.genres && movieDetails.genres.length > 0 && (
            <div className={S.genresContainer}>
              {movieDetails.genres.map((genre) => (
                <span key={genre.id} className={S.genre}>
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <div className={S.actionButtons}>
            <button className={S.playButton} onClick={handleWatchNow}>
              <FaPlay />
              Assistir agora
            </button>

            <button
              className={S.watchlistButton}
              onClick={handleAddToWatchlist}
            >
              <FaRegBookmark />
              Adicionar à lista
            </button>
          </div>

          {movieDetails.overview && (
            <p className={S.overview}>{movieDetails.overview}</p>
          )}
        </div>
      </section>

      <section className={S.detailsSection}>
        <div className={S.detailsGrid}>
          <div className={S.posterSection}>
            {movieDetails.poster_path && (
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${movieDetails.poster_path}`}
                alt={movieDetails.title}
                className={S.posterImage}
              />
            )}
          </div>

          <div className={S.infoSection}>
            <h2 className={S.sectionTitle}>Sobre o filme</h2>

            {movieDetails.overview && (
              <p className={S.overviewFull}>{movieDetails.overview}</p>
            )}

            <div className={S.detailsList}>
              {movieDetails.original_title !== movieDetails.title && (
                <div className={S.detailItem}>
                  <span className={S.detailLabel}>Título original:</span>
                  <span className={S.detailValue}>
                    {movieDetails.original_title}
                  </span>
                </div>
              )}

              <div className={S.detailItem}>
                <span className={S.detailLabel}>Data de lançamento:</span>
                <span className={S.detailValue}>
                  {formatDate(movieDetails.release_date)}
                </span>
              </div>

              {movieDetails.runtime && (
                <div className={S.detailItem}>
                  <span className={S.detailLabel}>Duração:</span>
                  <span className={S.detailValue}>
                    {formatRuntime(movieDetails.runtime)}
                  </span>
                </div>
              )}

              {movieDetails.spoken_languages &&
                movieDetails.spoken_languages.length > 0 && (
                  <div className={S.detailItem}>
                    <span className={S.detailLabel}>Idioma original:</span>
                    <span className={S.detailValue}>
                      {movieDetails.spoken_languages.find(
                        (lang) =>
                          lang.iso_639_1 === movieDetails.original_language
                      )?.name || movieDetails.original_language.toUpperCase()}
                    </span>
                  </div>
                )}

              {movieDetails.production_countries &&
                movieDetails.production_countries.length > 0 && (
                  <div className={S.detailItem}>
                    <span className={S.detailLabel}>Países de produção:</span>
                    <span className={S.detailValue}>
                      {movieDetails.production_countries
                        .map((country) => country.name)
                        .join(', ')}
                    </span>
                  </div>
                )}

              {movieDetails.genres && movieDetails.genres.length > 0 && (
                <div className={S.detailItem}>
                  <span className={S.detailLabel}>Gêneros:</span>
                  <span className={S.detailValue}>
                    {movieDetails.genres.map((genre) => genre.name).join(', ')}
                  </span>
                </div>
              )}

              {movieDetails.budget > 0 && (
                <div className={S.detailItem}>
                  <span className={S.detailLabel}>Orçamento:</span>
                  <span className={S.detailValue}>
                    ${movieDetails.budget.toLocaleString()}
                  </span>
                </div>
              )}

              {movieDetails.revenue > 0 && (
                <div className={S.detailItem}>
                  <span className={S.detailLabel}>Bilheteria:</span>
                  <span className={S.detailValue}>
                    ${movieDetails.revenue.toLocaleString()}
                  </span>
                </div>
              )}

              {movieDetails.production_companies &&
                movieDetails.production_companies.length > 0 && (
                  <div className={S.detailItem}>
                    <span className={S.detailLabel}>Produção:</span>

                    <div className={S.detailValue}>
                      <div className={S.productionCompanies}>
                        {movieDetails.production_companies.map((company) => (
                          <div key={company.id}>
                            {company.logo_path ? (
                              <img
                                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${company.logo_path}`}
                                alt={company.name}
                                className={S.companyLogo}
                                title={company.name}
                              />
                            ) : (
                              <span>{company.name}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              {movieDetails.imdb_id && (
                <div className={S.detailItem}>
                  <span className={S.detailLabel}>IMDb:</span>

                  <span className={S.detailValue}>
                    <a
                      href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {movieDetails.imdb_id}
                    </a>
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <Button onClick={() => navigate(-1)} className={S.backButton}>
                <FaArrowLeft />
                Voltar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

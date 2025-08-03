import S from './styles.module.css';

export const MovieCard = () => {
  return (
    <div className={S.movieCard}>
      <div className={S.wrapper}>
        <h2>Movie Title</h2>
        <p>Movie Description</p>
      </div>
    </div>
  );
};

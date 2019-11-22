import React from 'react';
import './index.css';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

export default function Movie({ movie, handleClick }) {
  const poster =
    movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie" onClick={() => handleClick(movie.imdbID)}>
      <h3 className="movie__title ellipsis">{movie.Title}</h3>
      <div className="movie__img">
        <img src={poster} alt={`The movie Title ${movie.Title}`} />
      </div>
      <p className="movie__time">({movie.Year})</p>
    </div>
  );
}

import { React, useState, useEffect } from "react";

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem(`movie_${props.movie.id}`);
    setIsSaved(savedState === 'true');
  }, [props.movie.id]);


  const handleToggleSave = (movie) => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    props.handleSaveMovies(movie);
    localStorage.setItem(`movie_${movie.id}`, newSavedState);
  };

  return (
    <li className="movies-card">
      <h3 className="movies-card__name">{props.movie.nameRU}</h3>
      <p className="movies-card__duration">{`${props.movie.duration}м`}</p>
      <a
        className="movies-card__link"
        href={props.movie.trailerLink}
        target="_blank"
      >
        <img
          src={`https://api.nomoreparties.co${props.movie.image.url}`}
          className="movies-card__image"
          alt="Обложка фильма"
        ></img>
      </a>
      <button
        onClick={() => handleToggleSave(props.movie)}
        className={`movies-card__button ${
          isSaved ? "movies-card__button_active" : ""
        }`}
      ></button>
    </li>
  );
}

export default MoviesCard;

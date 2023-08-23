function SavedMoviesCard(props) {

function deleteMovie(){
  props.handleRemoveSavedMovie(props.movie.id);
}

  return (
    <>
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
        <button onClick={deleteMovie} className="movies-card__button movies-card__button_delete"></button>
      </li>
    </>
  );
}

export default SavedMoviesCard;

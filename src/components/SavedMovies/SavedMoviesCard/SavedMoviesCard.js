import moviesCardImage from "../../../images/movies-card__image.jpg";

function SavedMoviesCard() {
  return (
    <>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button className="movies-card__button movies-card__button_delete"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button className="movies-card__button movies-card__button_delete"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button className="movies-card__button movies-card__button_delete"></button>
    </li>
    </>
  );
}

export default SavedMoviesCard;

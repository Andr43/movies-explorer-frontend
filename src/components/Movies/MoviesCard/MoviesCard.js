import moviesCardImage from "../../../images/movies-card__image.jpg";

function saveFilm(){
  const moviesCardButton = document.querySelectorAll(".movies-card__button");
moviesCardButton.forEach((button) => {
  button.classList.toggle("movies-card__button_active");
})
  }

function MoviesCard() {
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
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    <li className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
      src={moviesCardImage}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
    </>
  );
}

export default MoviesCard;

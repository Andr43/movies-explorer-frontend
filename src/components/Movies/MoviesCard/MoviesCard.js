function MoviesCard(props) {
  const listButton = document.querySelector(".movies-card-list__button");
  const moviesCard = document.querySelector(".movies-card-list__container").getElementsByTagName('li').length
  const moviesCardList = document.querySelector(".movies-card-list");
  const moviesCardListContainer = document.querySelector(".movies-card-list__container");

  function saveFilm() {
    const moviesCardButton = document.querySelectorAll(".movies-card__button");
    moviesCardButton.forEach((button) => {
      button.classList.toggle("movies-card__button_active");
    });
  }

  // function cardsQuantityCheck(){
  //   if(moviesCard >= 3){
  //     listButton.classList.add("visible");
  //     listButton.classList.remove("invisible");
  //     moviesCardList.classList.remove("movies-card-list_saved");
  //     moviesCardListContainer.classList.remove("movies-card-list__container_saved");
  //   } else {
  //     listButton.classList.add("invisible");
  //     listButton.classList.remove("visible");
  //     moviesCardList.classList.add("movies-card-list_saved");
  //     moviesCardListContainer.classList.add("movies-card-list__container_saved");
  //   }
  // }
  // cardsQuantityCheck();
  return (
    <li className="movies-card">
      <h3 className="movies-card__name">{props.movie.nameRU}</h3>
      <p className="movies-card__duration">{`${props.movie.duration}м`}</p>
      <img
      src={`https://api.nomoreparties.co${props.movie.image.url}`}
        className="movies-card__image"
        alt="Обложка фильма"
      ></img>
      <button onClick={saveFilm} className="movies-card__button"></button>
    </li>
  );
}

export default MoviesCard;

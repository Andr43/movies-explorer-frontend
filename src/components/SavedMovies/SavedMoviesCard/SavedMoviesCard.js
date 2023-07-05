import moviesCardImage from "../../../images/movies-card__image.jpg";

function SavedMoviesCard() {
  const listButton = document.querySelector(".movies-card-list__button");
  const moviesCard = document.querySelector(".movies-card-list__container").getElementsByTagName('li').length
  const moviesCardList = document.querySelector(".movies-card-list");
  const moviesCardListContainer = document.querySelector(".movies-card-list__container");

  function cardsQuantityCheck(){
    if(moviesCard >= 3){
      listButton.classList.add("visible");
      listButton.classList.remove("invisible");
      moviesCardList.classList.remove("movies-card-list_saved");
      moviesCardListContainer.classList.remove("movies-card-list__container_saved");
    } else {
      listButton.classList.add("invisible");
      listButton.classList.remove("visible");
      moviesCardList.classList.add("movies-card-list_saved");
      moviesCardListContainer.classList.add("movies-card-list__container_saved");
    }
  }
  cardsQuantityCheck();

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
    </>
  );
}

export default SavedMoviesCard;

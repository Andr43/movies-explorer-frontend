import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        <MoviesCard />
      </ul>
      <button className="movies-card-list__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;

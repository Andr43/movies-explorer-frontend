import MoviesCard from "../MoviesCard/MoviesCard.js";
import SavedMoviesCard from "../../SavedMovies/SavedMoviesCard/SavedMoviesCard.js";
import { useLocation } from "react-router-dom"; 

function MoviesCardList() {
  const location = useLocation(); 

  return (
    <section className={location.pathname.includes("saved-movies") ? "movies-card-list movies-card-list_saved" : "movies-card-list"}>
      <ul className={location.pathname.includes("saved-movies") ? "movies-card-list__container movies-card-list__container_saved" : "movies-card-list__container"}>
 {location.pathname.includes("saved-movies") ? <SavedMoviesCard /> : <MoviesCard />}
      </ul>
      {location.pathname.includes("saved-movies") ? "" : <button className="movies-card-list__button">Ещё</button>}
    </section>
  );
}

export default MoviesCardList;

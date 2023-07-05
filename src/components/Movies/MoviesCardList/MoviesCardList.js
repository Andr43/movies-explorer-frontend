import MoviesCard from "../MoviesCard/MoviesCard.js";
import SavedMoviesCard from "../../SavedMovies/SavedMoviesCard/SavedMoviesCard.js";
import { useLocation } from "react-router-dom"; 

function MoviesCardList(props) {
  const location = useLocation(); 
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
      {props.movies.slice(0, props.visibleItems).map((props) => (
        location.pathname.includes("saved-movies") ? <SavedMoviesCard key={props.id}
        movie={props} visible={props.visibleItems > 0} /> : <MoviesCard key={props.id}
        movie={props}
        visible={props.visibleItems > 0} />
          ))}
      </ul>
      {props.visibleItems < props.movies.length && props.movies.length >= 3 && (
        <button onClick={props.showMoreFilms} className="movies-card-list__button">
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;

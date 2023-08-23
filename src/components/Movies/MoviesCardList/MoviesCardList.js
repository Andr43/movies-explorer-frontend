import MoviesCard from "../MoviesCard/MoviesCard.js";
import SavedMoviesCard from "../../SavedMovies/SavedMoviesCard/SavedMoviesCard.js";
import { useLocation } from "react-router-dom";
import Preloader from "../../Preloader/Preloader.js";

function MoviesCardList(props) {
  const location = useLocation();
  const buttonText = props.isSearchFormEmpty
    ? "Нужно ввести ключевое слово"
    : "Ничего не найдено...";

  return (
    <section className="movies-card-list">
    <ul className="movies-card-list__container">
      {props.loading ? <Preloader /> : null}
        {props.movies.length > 0 ? (
          props.movies
            .slice(0, props.visibleItems)
            .map((movie) =>
              location.pathname.includes("saved-movies") ? (
                <SavedMoviesCard
                  key={movie.id}
                  movie={movie}
                  visible={props.visibleItems > 0}
                  handleRemoveSavedMovie={props.handleRemoveSavedMovie}
                />
              ) : (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  visible={props.visibleItems > 0}
                  handleSaveMovies={props.handleSaveMovies}
                  handleRemoveSavedMovie={props.handleRemoveSavedMovie}
                  isSaved={props.isSaved}
                />
              )
            )
        ) : (
          <p className="movies-card-list__par">{buttonText}</p>
        )}
      </ul>
      {props.visibleItems < props.movies.length && (
        <button
          onClick={props.showMoreFilms}
          className="movies-card-list__button"
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;

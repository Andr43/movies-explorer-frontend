import { React, useState, useEffect } from "react";

function SearchForm(props) {
  const [searchValueMovies, setSearchValueMovies] = useState("");
  const [searchValueMoviesSaved, setSearchValueMoviesSaved] = useState("");
  const [isShortMoviesButtonActive, setIsShortMoviesButtonActive] = useState(false);

  useEffect(() => {
    const storedQueryMovies = localStorage.getItem("searchQueryMovies");
    const storedQueryMoviesSaved = localStorage.getItem("searchQueryMoviesSaved");
    if (storedQueryMovies) {
      setSearchValueMovies(storedQueryMovies);
    } else if(storedQueryMoviesSaved){
      setSearchValueMoviesSaved(storedQueryMoviesSaved);
    }
  }, []);

  const handleSearchChange = (evt) => {
    window.location.pathname.includes('saved-movies') ? setSearchValueMoviesSaved(evt.target.value) : setSearchValueMovies(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    window.location.pathname.includes('saved-movies') ? props.filmsSearchSaved(searchValueMoviesSaved) && localStorage.setItem("searchQueryMoviesSaved", searchValueMoviesSaved) :  props.filmsSearch(searchValueMovies) && localStorage.setItem("searchQueryMovies", searchValueMovies);
  };

  const buttonChangeSwitch = () => {
    props.handleShowShortMovies();
    setIsShortMoviesButtonActive(!isShortMoviesButtonActive);
  };

  return (
    <form className="search-form" action="#" id={window.location.pathname.includes('saved-movies') ? 'saved-movies' : 'movies'} onSubmit={handleSubmit} noValidate>
      <input
        type="search"
        className="search-form__search"
        placeholder="Фильм"
        onChange={handleSearchChange}
        value={window.location.pathname.includes('saved-movies') ? searchValueMoviesSaved : searchValueMovies}
        required
      />
      <button className="search-form__button_save" type="submit">
        Найти
      </button>
      <div className="search-form__shorts">
        <button
          onClick={buttonChangeSwitch}
          className={`search-form__button_change ${isShortMoviesButtonActive ? 'search-form__button_change_active' : ''}`}
          type="button"
        ></button>
        <p className="search-form__par">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;

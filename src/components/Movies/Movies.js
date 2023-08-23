import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function Movies(props) {
  return (
    <>
      <Header />
      <SearchForm
        handleShowShortMovies={props.handleShowShortMovies}
        filmsSearch={props.filmsSearch}
        filmsSearchSaved={props.filmsSearchSaved}
      />
      <MoviesCardList
        isSearchFormEmpty={props.isSearchFormEmpty}
        loading={props.loading}
        showMoreFilms={props.showMoreFilms}
        visibleItems={props.visibleItems}
        movies={props.movies}
        savedMovies={props.savedMovies}
        handleSaveMovies={props.handleSaveMovies}
        handleRemoveSavedMovie={props.handleRemoveSavedMovie}
        isSaved={props.isSaved}
      />
      <Footer />
    </>
  );
}

export default Movies;

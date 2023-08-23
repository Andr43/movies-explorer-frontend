import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function SavedMovies(props) {
  return (
    <>
      <Header />
      <SearchForm
      handleShowShortMovies={props.handleShowShortMovies}
      filmsSearchSaved={props.filmsSearchSaved} />
      <MoviesCardList movies={props.savedMovies} handleRemoveSavedMovie={props.handleRemoveSavedMovie} />
      <Footer />
    </>
  );
}

export default SavedMovies;
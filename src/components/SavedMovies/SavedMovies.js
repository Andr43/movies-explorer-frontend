import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function SavedMovies(props) {
  return (
    <>
      <Header />
      <SearchForm filmsSearch={props.filmsSearch} />
      <MoviesCardList movies={props.movies} />
      <Footer />
    </>
  );
}

export default SavedMovies;
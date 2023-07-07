import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function Movies(props) {
  return (
    <>
      <Header />
      <SearchForm searchResult={props.searchResult} filmsSearch={props.filmsSearch} />
      <MoviesCardList loading={props.loading} showMoreFilms={props.showMoreFilms} visibleItems={props.visibleItems} movies={props.movies} />
      <Footer />
    </>
  );
}

export default Movies;
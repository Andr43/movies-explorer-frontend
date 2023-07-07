import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Auth/Register/Register.js";
import Login from "../Auth/Login/Login.js";
import Error from "../Error/Error.js";
import ResultPopup from "../ResultPopup/ResultPopup.js";
import * as moviesApi from "../../utils/MoviesApi.js";

function App() {
const [movies, setMovies] = useState([]);
const [visibleItems, setVisibleItems] = useState(12);
const [loading, setLoading] = useState(true);
const [searchQuery, setSearchQuery] = useState('');

useEffect(() => {
  const storedQuery = localStorage.getItem('searchQuery');
  if (storedQuery) {
    setSearchQuery(storedQuery);
    filmsSearch(storedQuery);
  } else {
    filmsSearch();
  } 
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

function filmsSearch(data) {
  setLoading(true);
  moviesApi.getFilms().then((res) => {
    const filteredMovies = res.filter((movie) => {
      const movieName = movie.nameRU;
      return movieName.indexOf(data) >= 0;
    });
    setLoading(false);
    setMovies(filteredMovies);
})
};

function handleResize() {
  const width = window.innerWidth;
  if (width <= 480) {
    setVisibleItems(5);
  } else if (width <= 768) {
    setVisibleItems(8);
  } else {
    setVisibleItems(12);
  }
}

  function showMoreFilms() {
    const width = window.innerWidth;
    if (width <= 768) {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 2);
    } else {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={<Movies searchResult={localStorage.getItem('moviesResults')} loading={loading} visibleItems={visibleItems} showMoreFilms={showMoreFilms} filmsSearch={filmsSearch} movies={movies} />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies filmsSearch={filmsSearch} movies={movies} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signout" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="/result" element={<ResultPopup />} />
      </Routes>
    </>
  );
}

export default App;

import { React, useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Auth/Register/Register.js";
import Login from "../Auth/Login/Login.js";
import ResultPopup from "../ResultPopup/ResultPopup.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import * as moviesApi from "../../utils/MoviesApi.js";
import * as UserApi from "../../utils/UserApi.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [visibleItems, setVisibleItems] = useState(12);
  const [loading, setLoading] = useState(true);
  const [registeredIn, setRegisteredIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchQueryMovies, setSearchQueryMovies] = useState("");
  const [searchQuerySavedMovies, setSearchQuerySavedMovies] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isShortMoviesShown, setIsShortMoviesShown] = useState(false);
  const [isSearchFormEmpty, setIsSearchFormEmpty] = useState(false);
  const navigate = useNavigate();

  const handleTokenCheck = () => {
    const authorized = localStorage.getItem("authorized");
    if (authorized === "true") {
      setLoggedIn(true);
      navigate("/movies", { replace: true });
    } else {
      return;
    }
  };

  useEffect(() => {
    handleTokenCheck();
    const storedQueryMovies = localStorage.getItem("searchQueryMovies");
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (loggedIn && storedQueryMovies && storedMovies) {
      setSearchQueryMovies(storedQueryMovies);
      setMovies(storedMovies);
      filmsSearch(storedQueryMovies);
      setIsSearchFormEmpty(false);
    } else {
      filmsSearch();
    };
    const storedQuerySavedMovies = localStorage.getItem("searchQuerySavedMovies");
    const storedSavedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    if (loggedIn && window.location.pathname.includes('saved-movies') && storedQuerySavedMovies && storedSavedMovies) {
      setSearchQuerySavedMovies(storedQuerySavedMovies);
      setSavedMovies(storedSavedMovies);
    } else {
      filmsSearchSaved();
    };
    loggedIn &&
      UserApi.getUserInfo()
        .then((userInfo) => {
          setCurrentUser({
            name: userInfo.name,
            email: userInfo.email,
            id: userInfo._id,
          });
        })
        .catch((err) => {
          console.error(err);
          return;
        });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [loggedIn]);

  useEffect(() => {
    setLoading(true);
    if (isShortMoviesShown) {
      const shortMovies = movies.filter((movie) => movie.duration <= 40);
      setMovies(shortMovies);
      setLoading(false);
    } else {
      window.location.pathname.includes('saved-movies') ? filmsSearchSaved(searchQuerySavedMovies) : filmsSearch(searchQueryMovies)
    }
  }, [isShortMoviesShown, searchQueryMovies, searchQuerySavedMovies]);

  const filmsSearch = (data) => {
    setLoading(true);
    if (data === "" || data === undefined) {
      setMovies([]);
      setLoading(false);
      setIsSearchFormEmpty(true);
    } else {
      moviesApi.getFilms().then((res) => {
        const filteredMovies = res.filter((movie) => {
          const movieName = movie.nameRU;
          return movieName.indexOf(data) >= 0;
        });
        setLoading(false);
        setMovies(filteredMovies);
        setIsSearchFormEmpty(false);
        localStorage.setItem("searchQueryMovies", data);
        localStorage.setItem("movies", JSON.stringify(filteredMovies));
      });
    }
  };

  const filmsSearchSaved = (data) => {
    setLoading(true);
    if (data === "" || data === undefined) {
      setSavedMovies([]);
      setLoading(false);
      setIsSearchFormEmpty(true);
    } else {
        const filteredMovies = savedMovies.filter((movie) => {
          const movieName = movie.nameRU;
          return movieName.indexOf(data) >= 0;
        });
        setLoading(false);
        setSavedMovies(filteredMovies);
        setIsSearchFormEmpty(false);
        localStorage.setItem("searchQuerySavedMovies", data);
        localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
      };
    };
  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setVisibleItems(5);
    } else if (width <= 768) {
      setVisibleItems(8);
    } else {
      setVisibleItems(12);
    }
  };

  const showMoreFilms = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
    } else {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
    }
  };

  const onRegisterSubmit = (name, email, password, form) => {
    UserApi.register(name, email, password)
      .then((res) => {
        if (res) {
          setRegisteredIn(true);
          form.reset();
          <ResultPopup />;
          navigate("/signin", { replace: true });
        }
        if (!res) {
          return;
        }
      })
      .catch((err) => {
        console.error(err);
        setFetchError(err);
        return;
      });
  };

  const onLoginSubmit = (email, password, form) => {
    if (!email || !password) {
      return;
    }
    UserApi.login(email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          localStorage.setItem("authorized", "true");
          form.reset();
          navigate("/movies", { replace: true });
        }
        if (!res) {
          setLoggedIn(false);
          return;
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        console.error(err);
        setFetchError(err);
        return;
      });
  };

  const onSignOut = () => {
    if (loggedIn) {
      UserApi.signout()
        .then((res) => {
          setLoggedIn(false);
          localStorage.removeItem("authorized");
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
          return;
        });
    } else {
      return;
    }
  };

  function handleUpdateUser(name, email) {
    UserApi.updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          name: name,
          email: email,
        });
      })
      .catch((err) => {
        console.error(err);
        setFetchError(err);
        return;
      });
  }

  function handleSaveMovies(movie) {
    if (!savedMovies.some(savedMovie => savedMovie.id === movie.id)) {
      const updatedSavedMovies = [...savedMovies, movie];
      setSavedMovies(updatedSavedMovies);
      localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
    }
  }
  
  function handleRemoveSavedMovie(movieId) {
    const updatedSavedMovies = savedMovies.filter(movie => movie.id !== movieId);
    setSavedMovies(updatedSavedMovies);
  };

function handleShowShortMovies() {  
  setIsShortMoviesShown(!isShortMoviesShown);
}

  return (
    <>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={
                <Movies
                  isSearchFormEmpty={isSearchFormEmpty}
                  searchResult={localStorage.getItem("moviesResults")}
                  loading={loading}
                  visibleItems={visibleItems}
                  showMoreFilms={showMoreFilms}
                  filmsSearch={filmsSearch}
                  filmsSearchSaved={filmsSearchSaved}
                  movies={movies}
                  savedMovies={savedMovies}
                  handleShowShortMovies={handleShowShortMovies}
                  handleSaveMovies={handleSaveMovies}
                  handleRemoveSavedMovie={handleRemoveSavedMovie}
                  isSaved={savedMovies.includes(movies)}
                />
              }
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={
                <SavedMovies
                  filmsSearchSaved={filmsSearchSaved}
                  handleShowShortMovies={handleShowShortMovies}
                  savedMovies={savedMovies}
                  handleRemoveSavedMovie={handleRemoveSavedMovie}
                />
              }
            />
          }
        />
        <Route
          path="/users/me"
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={
                <Profile
                  fetchError={fetchError}
                  currentUser={currentUser}
                  handleUpdateUser={handleUpdateUser}
                  onSignOut={onSignOut}
                />
              }
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              fetchError={fetchError}
              loggedIn={loggedIn}
              onLoginSubmit={onLoginSubmit}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              fetchError={fetchError}
              registeredIn={registeredIn}
              onRegisterSubmit={onRegisterSubmit}
            />
          }
        />
        <Route path="/signout" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

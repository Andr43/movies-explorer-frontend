import { React, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Auth/Register/Register.js";
import Login from "../Auth/Login/Login.js";
import Error from "../Error/Error.js";
import ResultPopup from "../ResultPopup/ResultPopup.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import * as moviesApi from "../../utils/MoviesApi.js";
import * as UserApi from "../../utils/UserApi.js";

function App() {
const [movies, setMovies] = useState([]);
const [currentUser, setCurrentUser] = useState([]);
const [visibleItems, setVisibleItems] = useState(12);
const [loading, setLoading] = useState(true);
const [registeredIn, setRegisteredIn] = useState(false);
const [loggedIn, setLoggedIn] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const [fetchError, setFetchError] = useState(null);
const [isSearchFormEmpty, setIsSearchFormEmpty] = useState(false);
const navigate = useNavigate();

const handleTokenCheck = () => {
  if (localStorage.getItem("authorized")) {
    const authorized = localStorage.getItem("authorized");
    if (authorized) {
            setLoggedIn(true);
            navigate("/movies", { replace: true });
          } else {
            return
          }
    }
  }
  
useEffect(() => {
  handleTokenCheck();
  const storedQuery = localStorage.getItem('searchQuery');
  if (storedQuery) {
    setSearchQuery(storedQuery);
    filmsSearch(storedQuery);
  } else {
    filmsSearch();
  } 
  loggedIn &&
    UserApi.getUserInfo()
      .then((userInfo) => {
        setCurrentUser({
          name: userInfo.name,
          email: userInfo.email,
          id: userInfo._id,
        })
      })
      .catch((err) => {
        console.error(err)
        return;
      });
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [loggedIn]);

const filmsSearch = (data) => {
  setLoading(true);
  if(data === ""){
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
  })
  }
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
}

  const showMoreFilms = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 2);
    } else {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    }
  }
  
  const onRegisterSubmit = (name, email, password, form) => {
    UserApi
      .register(name, email, password)
      .then((res) => {
        console.log(res)
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
    }

    const onLoginSubmit = (email, password, form) => {
      if (!email || !password) {
        return;
      }
      UserApi
        .login(email, password)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            localStorage.setItem("authorized", "true");
            form.reset();
            navigate("/movies", { replace: true });
            <ResultPopup />;
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
      }

      const onSignOut = () => {
        if(loggedIn){
          UserApi
        .signout()
        .then((res) => {
          setLoggedIn(false); 
          localStorage.removeItem("authorized"); 
          navigate("/"); 
        })
        .catch((err) => {
          console.error(err)
          return;
        });
        } else {
          return
        }
      };

      function handleUpdateUser(name, email) {
        UserApi
          .updateUserInfo(name, email)
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
      };
  return (
    <>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/movies"
          element={<ProtectedRoute
            loggedIn={loggedIn}
            element={
          <Movies isSearchFormEmpty={isSearchFormEmpty} searchResult={localStorage.getItem('moviesResults')} loading={loading} visibleItems={visibleItems} showMoreFilms={showMoreFilms} filmsSearch={filmsSearch} movies={movies} />} />}
        />
        <Route
          path="/saved-movies"
          element={<ProtectedRoute
            loggedIn={loggedIn}
            element={
          <SavedMovies filmsSearch={filmsSearch} movies={movies} />} />}
        />
        <Route path="/users/me" element={
        <ProtectedRoute
        loggedIn={loggedIn}
        element={<Profile fetchError={fetchError} currentUser={currentUser} handleUpdateUser={handleUpdateUser} onSignOut={onSignOut} />} />} />
        <Route path="/signin" element={<Login fetchError={fetchError} loggedIn={loggedIn} onLoginSubmit={onLoginSubmit} />} />
        <Route path="/signup" element={<Register fetchError={fetchError} registeredIn={registeredIn} onRegisterSubmit={onRegisterSubmit} />} />
        <Route path="/signout" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="/result" element={<ResultPopup />} />
      </Routes>
    </>
  );
}

export default App;

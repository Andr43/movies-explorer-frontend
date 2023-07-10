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
import * as moviesApi from "../../utils/MoviesApi.js";
import * as UserApi from "../../utils/UserApi.js";

function App() {
const [movies, setMovies] = useState([]);
const [currentUser, setCurrentUser] = useState([]);
const [visibleItems, setVisibleItems] = useState(12);
const [loading, setLoading] = useState(true);
const [loggedIn, setLoggedIn] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const [isSearchFormEmpty, setIsSearchFormEmpty] = useState(false);
const navigate = useNavigate();

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
        if (res) {
          form.reset();
          <ResultPopup />;
          navigate("/signin", { replace: true });
        }
        if (!res) {
          return;
        }
      })
      .catch((err) => {
        console.error(err)
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
            localStorage.setItem("authorized", res);
            setLoggedIn(true);
            form.reset();
            navigate("/movies", { replace: true });
            <ResultPopup />;
          }
          if (!res) {
            return;
          }
        })
        .catch((err) => {
          console.error(err)
          return;
        });
      }

      const onSignOut = () => {
        if(loggedIn){
          UserApi
        .signout()
        .then((res) => {
          console.log('sfdsdg')
          setLoggedIn(false); 
          localStorage.removeItem("authorized"); 
          navigate("/signin"); 
        })
        .catch((err) => {
          console.error(err)
          return;
        });
        }
      };

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={<Movies isSearchFormEmpty={isSearchFormEmpty} searchResult={localStorage.getItem('moviesResults')} loading={loading} visibleItems={visibleItems} showMoreFilms={showMoreFilms} filmsSearch={filmsSearch} movies={movies} />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies filmsSearch={filmsSearch} movies={movies} />}
        />
        <Route path="/profile" element={<Profile onSignOut={onSignOut} />} />
        <Route path="/signin" element={<Login onLoginSubmit={onLoginSubmit} />} />
        <Route path="/signup" element={<Register onRegisterSubmit={onRegisterSubmit} />} />
        <Route path="/signout" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="/result" element={<ResultPopup />} />
      </Routes>
    </>
  );
}

export default App;

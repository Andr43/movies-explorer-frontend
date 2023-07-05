import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Auth/Register/Register.js";
import Login from "../Auth/Login/Login.js";
import Error from "../Error/Error.js";
import Preloader from "../Preloader/Preloader.js";
import ResultPopup from "../ResultPopup/ResultPopup.js";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/saved-movies" element={<SavedMovies />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signout" element={<Login />} />
      <Route path="/error" element={<Error />} />
      <Route path="/preloader" element={<Preloader />} />
      <Route path="/result" element={<ResultPopup />} />
      </Routes>
      </>
  );
}

export default App;
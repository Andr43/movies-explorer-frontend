import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.js";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={''} />
      <Route path="/saved-movies" element={''} />
      <Route path="/profile" element={''} />
      <Route path="/signin" element={''} />
      <Route path="/signup" element={''} />
      </Routes>
      </>
  );
}

export default App;
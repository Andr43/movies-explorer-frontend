import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Promo from "../Main/Promo/Promo.js";

function App() {
  return (
    <>
      <Promo />
      <Routes>
      <Route path="/" element={''} />
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
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Footer from './components/Footer/Footer.jsx';
// Components
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home.jsx";
import Movie from "./components/Movie.jsx";
// import NotFound from './components/NotFound.jsx';
// Style
import { GlobalStyle } from "./GlobalStyle.js";
import { useHomeFetch } from "./Hooks/useHomeFetch.js";

function App() {
  const style = {
    position: "relative",
  };
  const { searchTerm } = useHomeFetch();
  return (
    <div className="app" style={style}>
      <Header searchTerm={searchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// Components
import Header from './components/Header/Header.jsx';
import Home from './components/Home.jsx';
import Movie from './components/Movie.jsx';
import NotFound from './components/NotFound.jsx';
// Style
import { GlobalStyle } from "./GlobalStyle.js"

function App() {
    return ( 
        <div className= "App">
            <Header />
            <Routes>
                <Route path="/*" element={<Navigate to="/"/>} />
                <Route path="/" element={<Home />} />
                <Route path="/:movieId" element={<Movie />} />               
            </Routes>
            <GlobalStyle />
        </div>
    );
}

export default App;
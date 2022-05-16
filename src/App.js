import './App.css';
import React from "react";
import {Reviews,Home2} from './pages';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("./movies.json")
      .then((response) => response.json())
      .then(setMovies);
  }, []);
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home2 />} movies={movies}
              onRemoveMovie={(title) => {
                // console.log(title);
                const updatedMovies = movies.filter(
                  (movie) => movie.Title !== title
                );
                setMovies(updatedMovies);
                //  console.log(movies);
                 
                 }}/>
        <Route path="/reviews" element={<Reviews />} />
        </Routes>
  
    </div>


  );

}

export default App;

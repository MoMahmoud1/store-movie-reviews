import './App.css';
import React from "react";
import {Reviews,Home1} from './pages';
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
        <Route path="/" element={<Home1 />} />
        <Route path="/reviews" element={<Reviews />} />
        </Routes>
  
    </div>


  );

}

export default App;

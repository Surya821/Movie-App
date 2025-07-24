import { useState } from "react";
import { MovieCard } from "./Components/MovieCard";
import {Routes, Route} from 'react-router-dom';
import "./App.css";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./Context/MovieContext";

function App() {
  const movieNumber = 1;
  return (
    <>
        <MovieProvider>
    <div>
      <Navbar />
    </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorite" element={<Favorite/>} />
        </Routes>
      </main>
        </MovieProvider>
    </>
  );
}

export default App;

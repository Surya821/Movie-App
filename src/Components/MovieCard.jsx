import React from "react";
import "../CSS/MovieCard.css";
import { useMovieContext } from "../Context/MovieContext";

export const MovieCard = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorites } =
    useMovieContext();

    const favorite = isFavorites(movie.id)

  function onFavorite(e) {
    e.preventDefault()
    if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavorite}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

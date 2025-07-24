import { MovieCard } from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../Services/api";
import "../CSS/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load Movie");
      } finally {
        setLoading(false);
      }
    }
    loadPopularMovies();
  }, []);

  const handleSearch =async(e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if(loading) return

    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (err){
      console.log(err);
      setError("Failed to search Movies...")
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search For Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? <div> loading...</div> : <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div> }

      {error && <div className="error-message">{error}</div> }

      
    </div>
  );
}

export default Home;

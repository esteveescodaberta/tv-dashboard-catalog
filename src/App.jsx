import { useState, useEffect } from 'react'
import './App.css'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function App() {
  
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null); 

  useEffect(() => {
  const fetchMovies = async () => {
    try {
    
      const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`;
      
      
      const response = await fetch(url);
      
      
      const data = await response.json();

      
      console.log(data.results); 
      setMovies(data.results);
      setHeroMovie(data.results[0]); 
    } catch (error) {
      console.error("Error carregant pel·lícules:", error);
    }
  };

  fetchMovies();
}, []); 

  return (
    <div className="dashboard-container">
      
      {/* SIDEBAR (MENU) */}
      <aside className="sidebar">
        <div className="brand">catalog</div>
        <nav className="menu">
          <button className="menu-item active">Home</button>
          <button className="menu-item">Movies</button>
          <button className="menu-item">Series</button>
          <button className="menu-item">My List</button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* FILTERS SECTION */}
        <section className="filters-section">
          {["All", "Action", "Horror", "Drama", "Sci-Fi"].map((genere) => (
            <button
              key={genere}
              className={`filter-btn ${selectedGenre === genere ? 'active' : ''}`}
              onClick={() => setSelectedGenre(genere)}
            >
              {genere}
            </button>
          ))}
        </section>
        
        {/* HERO SECTION */}
        {heroMovie && (
          <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-data">
              <span className="rating">⭐ {heroMovie.vote_average?.toFixed(1)}</span>
              <h1 className="hero-title">{heroMovie.title}</h1>
              <p className="hero-description">{heroMovie.overview}</p>
              <div className="hero-buttons">
                <button className="btn-play">▶ Play</button>
                <button className="btn-info">More Info</button>
              </div>
            </div>
          </section>
        )}

        {/* GALLERY SECTION */}
        <section className="gallery-section">
          <h2 className="section-title">Recommended for You</h2>
          <div className="gallery-grid">
            {movies.map((movie) => (
              <div 
                key={movie.id} 
                className="movie-card"
                onClick={() => setHeroMovie(movie)}
              >
                <img 
                  src={`${IMAGE_URL}${movie.poster_path}`} 
                  alt={movie.title} 
                  className="movie-img"
                />
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;

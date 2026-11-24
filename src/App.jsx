import { useState } from 'react'
import './App.css'

function App() {
  
  const [selectedGenre, setSelectedGenre] = useState("All");

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
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-data">
            <span className="rating">⭐ x</span>
            <h1 className="hero-title">Lorem ipsum dolor sit amet</h1>
            <p className="hero-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio temporibus officiis exercitationem voluptatum, id aperiam voluptates recusandae provident distinctio sed minima dolores doloremque, quae expedita reprehenderit, nisi corrupti eos similique. </p>
            <div className="hero-buttons">
              <button className="btn-play">▶ Play</button>
              <button className="btn-info">More Info</button>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="gallery-section">
          <h2 className="section-title">Recommended for You</h2>
          <div className="gallery-grid">
            {/* Movie cards will be dynamically rendered here */}
            <div className="movie-card-skeleton">Poster 1</div>
            <div className="movie-card-skeleton">Poster 2</div>
            <div className="movie-card-skeleton">Poster 3</div>
            <div className="movie-card-skeleton">Poster 4</div>
            <div className="movie-card-skeleton">Poster 5</div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;

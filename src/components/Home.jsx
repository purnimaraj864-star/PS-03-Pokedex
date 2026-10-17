import React from 'react'
import { Link } from "react-router";

function Home() {
  return (
    <div className="hero">
      <h1>Pokedex</h1>
      <p>
        Your online encyclopedia of Pokemon. Browse the first 50 Pokemon,
        search them by name and check their types, height, weight and base
        stats.
      </p>
      <Link to="/pokemon" className="hero-button">Open Pokedex</Link>
    </div>
  )
}

export default Home

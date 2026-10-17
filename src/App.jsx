import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import './App.css'
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import PokemonDetails from './components/PokemonDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pokemon'>Pokedex</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/pokemon' element={<Pokemon />} />
        <Route
          path="/pokemon/:name"
          element={<PokemonDetails />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

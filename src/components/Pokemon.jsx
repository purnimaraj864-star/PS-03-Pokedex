import { useEffect, useState } from "react";
import { Link } from "react-router";

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {pokemonList
        .filter((pokemon) =>
          pokemon.name.includes(search.toLowerCase())
        )
        .map((pokemon) => {
          const num = pokemon.url.split("/")[6];

          return (
            <div key={pokemon.name}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`}
                alt={pokemon.name}
                width="150"
              />

              <h3>{pokemon.name}</h3>
              <p>#{num}</p>

              <Link to={`/pokemon/${pokemon.name}`}>
                View Details
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Pokemon;
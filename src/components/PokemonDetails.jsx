import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Pokemon Details</h1>

      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        width="250"
      />

      <h2>{pokemon.name}</h2>

      <p>
        Type: {pokemon.types.map((type) => type.type.name).join(", ")}
      </p>

      <p>Height: {pokemon.height / 10} m</p>

      <p>Weight: {pokemon.weight / 10} kg</p>

      <h3>Base Stats</h3>

      {pokemon.stats.map((stat) => (
        <p key={stat.stat.name}>
          {stat.stat.name}: {stat.base_stat}
        </p>
      ))}

      <Link to="/pokemon">Back to Pokedex</Link>
    </div>
  );
}

export default PokemonDetails;
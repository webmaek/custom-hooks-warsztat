import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

const usePokemonApi = (value) => {
  const [query, queryPokemon] = useState(value);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      setError(null);

      axios
        .get(`${BASE_URL}/${query}`)
        .then((response) => setPokemon(response.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    };
    fetchData();
  }, [query]);

  return {
    query,
    queryPokemon,
    pokemon,
    error,
    isLoading,
  };
};

export default usePokemonApi;

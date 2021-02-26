import { useState } from "react";
import usePokemonApi from "../hooks/usePokemonApi";
import { Ellipsis } from "react-awesome-spinners";
import styled from "styled-components";

const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 2em;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
`;

export default function Pokemon() {
  const [value, setValue] = useState("pikachu");
  const { queryPokemon, pokemon, error, isLoading } = usePokemonApi("pikachu");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      queryPokemon(value);
      setValue("");
    }
  };

  const renderPokemon = () => {
    return (
      <PokemonWrapper>
        <Name>{pokemon.name}</Name>
        <Image src={pokemon.sprites.front_default} alt="Pokemon" />
      </PokemonWrapper>
    );
  };

  return (
    <div>
      <h1>Pokemon API</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div>{isLoading && <Ellipsis />}</div>
      <div>{error && <p>An error has occured...</p>}</div>
      <div>{!isLoading && pokemon && renderPokemon()}</div>
    </div>
  );
}

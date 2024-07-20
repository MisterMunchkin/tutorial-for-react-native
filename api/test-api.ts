import { Pokemon } from "@/types/pokemon.type";

const baseUrl = 'https://pokeapi.co/api/v2';
const pokemonUrl = '/pokemon'

export const getPokemon = async (pokemon: string): Promise<Pokemon> => {
  const response = await fetch(`${baseUrl}${pokemonUrl}/${pokemon}`);
  return await response.json();
}
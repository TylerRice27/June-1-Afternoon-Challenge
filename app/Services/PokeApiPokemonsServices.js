import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/PokeApiPokemon.js";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 10000

})


class PokeApiPokemonService {

    async getApiPokemon() {
        const res = await pokeApi.get()
        console.log('get pokemon from api', res.data);
        ProxyState.pokemons = res.data.results.map(p => new Pokemon(p))
    }

    async getPokemonDetails(index) {
        const res = await pokeApi.get(index)
        console.log('get poxemon info', res.data);
    }

}











export const pokeApiPokemonService = new PokeApiPokemonService()
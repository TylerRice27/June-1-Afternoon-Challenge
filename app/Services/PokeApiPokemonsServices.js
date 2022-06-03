import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/PokeApiPokemon.js";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 10000

})


class PokeApiPokemonService {


    async setActive(name) {

        const res = await pokeApi.get(name)
        console.log('get pokemon info', res.data);
        ProxyState.activePokemon = new Pokemon(res.data)
        console.log('new active', ProxyState.activePokemon);
    }

    async getApiPokemon() {
        const res = await pokeApi.get()
        console.log('get pokemon from api', res.data);
        ProxyState.pokemons = res.data.results.map(p => new Pokemon(p))
    }


}











export const pokeApiPokemonService = new PokeApiPokemonService()
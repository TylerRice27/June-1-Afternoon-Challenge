import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/PokeApiPokemon.js"
import { pokeApiPokemonService } from "../Services/PokeApiPokemonsServices.js"
import { Pop } from "../Utils/Pop.js"

function _drawPokemon() {
    let showPokemons = ProxyState.pokemons
    let template = ''
    showPokemons.forEach(p => template += p.Template)
    document.getElementById("Poke-Pokemon").innerHTML = template

}


export class pokeApiPokemonsController {
    constructor() {
        // console.log('load pokemon', ProxyState.pokemons);
        ProxyState.on('pokemons', _drawPokemon)
        this.getApiPokemon()
    }





    async getApiPokemon() {
        try {
            await pokeApiPokemonService.getApiPokemon()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }


}
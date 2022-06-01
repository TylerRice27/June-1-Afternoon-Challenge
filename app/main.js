import { pokeApiPokemonsController } from "./Controllers/PokeApiPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokeApiPokemonsController = new pokeApiPokemonsController();

}

window["app"] = new App();

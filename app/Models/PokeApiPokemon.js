
export class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.type = data.type
        this.img = data.sprites
    }


    get Template() {
        return `
        
        <button class="btn btn-danger m-3 text-black rounded-pill" "selectable" onclick="app.pokeApiPokemonsController.setActive()"> ${this.name}</button>
        
        
        
         `
    }



    get activeTemplate() {
        return `  <div class="text-center">
            <img src="${this.img}" alt="">
            <p class="fs-1 fw-bold m-0">${this.name}</p>
            <p class="m-0 pb-4">Types: ${this.FormatTypes}</p>
            <button class="btn btn-danger rounded" onclick="app.myPokemonController.catch()" >Catch ${this.name}!</button>
          </div>`
    }
}
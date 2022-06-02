
export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.url = data.url
    }


    get Template() {
        return `<b onclick="app"> ${this.name}</b>
        
        
        
         `
    }
}

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.url = data.url
    }


    get Template() {
        return `<b> ${this.name}</b>
        
        
        
         `
    }
}
export class Airport {
    id: number                 
    code: string               
    name: string               
    city: string
    
    constructor(
        id: number,                
        code: string,               
        name: string,               
        city: string 
    ){
        this.id = id
        this.code = code
        this.name = name
        this.city = city
    }
}

export const airports: Airport[] = [
    new Airport(1, "A1", "Jhon F Kennedy", "New york"),
    new Airport(2, "A2", "Airport of Toronto", "Toronto"),
    new Airport(3, "A3", "Airport of Paris", "Paris"),
    new Airport(4, "A4", "Aeropuerto de Ezeiza", "Buenos Aires"),
    new Airport(5, "A5", "Aeropuerto do Rio", "Rio do janeiro")
]
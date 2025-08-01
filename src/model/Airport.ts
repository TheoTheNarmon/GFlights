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

export const Airports: Airport[] = [
    new Airport(1, "JFK", "Jhon F Kennedy", "New York"),
    new Airport(2, "EWR", "New York Newark", "United States"),
    new Airport(3, "LGA", "New York LaGuardia", "United States"),
    new Airport(4, "SWF", "Stewart International", "New York"),
    new Airport(5, "NCL", "Newcastle", "United Kingdom"),
    new Airport(6, "NQY", "Newquay", "United Kingdom"),
    new Airport(7, "NZ", "New Zealand", "New Zealand")
]
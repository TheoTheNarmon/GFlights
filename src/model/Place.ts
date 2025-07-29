export class Place{
    id: number
    city: string
    country: string
    latitude: number
    longitude: number

    constructor(
        id: number,
        city: string,
        country: string,
        latitude: number,
        longitude: number
    ){
        this.id = id
        this.city = city
        this.country = country
        this.latitude = latitude
        this.longitude = longitude
}}

export const places: Place[] = [
    new Place(1, "New york", "USA", 40.646591983550096, -73.78145484541872),
    new Place(2, "Toronto", "Canada", 43.68115910238777, -79.62952220164924),
    new Place(3, "Paris", "France", 49.008632258003075, 2.5508686998412085),
    new Place(4, "Buenos Aires", "Argentina", -34.81369636802773, -58.53736608366783),
    new Place(5, "Rio do janeiro", "Brazil", -22.805210438491645, -43.256552601492565)
]
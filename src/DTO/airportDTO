import {Airport} from '../model/Airport'

export class NearAirportDTO{
    id: number
    code: string          
    name: string          
    city: string
    country: string
    latitude: number
    longitude: number
    distanceKm: number

    constructor(
        id: number,
        code: string,
        name: string,
        city: string,
        country: string,
        latitude: number,
        longitude: number,
        distanceKm: number
    ){
        this.id = id
        this.code = code
        this.name = name
        this.city = city
        this.country = country
        this.latitude = latitude
        this.longitude = longitude
        this.distanceKm = distanceKm
}}

export interface AirportSearchResultDTO {
  id: number
  code: string
  name: string
  city: string
}

export function fromNearAirport(near:NearAirportDTO){
    return new Airport(near.id,near.code,near.name,near.city)
}

export function fromSearchResultAirport(result:AirportSearchResultDTO){
    return new Airport(result.id,result.code,result.name,result.city)
}
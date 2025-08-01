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
  entityId: number
  skyId: string
  title: string
  suggestionTitle: string
  subtitle: string
  entityType: string
  localizedName: string
  flightPlaceType: string
}
/*
export function fromNearAirport(near:NearAirportDTO){
    return new Airport(near.id,near.code,near.name,near.city)
}*/

export function fromSearchResultAirport(result:AirportSearchResultDTO){
    return new Airport(result.entityId,result.skyId,result.title,result.localizedName)
}
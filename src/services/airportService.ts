import axios, { AxiosResponse } from 'axios'
import { Airport } from '../model/Airport'
import { getAirports } from '../Controller/APIcontroller'
import { fromSearchResultAirport } from '../DTO/airportDTO'

export function searchAirport(word:string, airports:Airport[]){
    return airports.filter(airport => airport.city.toLowerCase().includes(word.toLowerCase()) || airport.name.toLowerCase().includes(word.toLowerCase()))
}

export async function getAllAirports(){
    return  (await getAirports()).map((airport)=>fromSearchResultAirport(airport))
}
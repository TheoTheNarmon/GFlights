import axios, { AxiosResponse } from 'axios'
import { Airport } from '../model/Airport'

export function searchAirport(word:string, airports:Airport[]){
    return airports.filter(airport => airport.city.toLowerCase().includes(word.toLowerCase()) || airport.name.toLowerCase().includes(word.toLowerCase()))
}
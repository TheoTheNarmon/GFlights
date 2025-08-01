import axios, { AxiosResponse } from 'axios'
import {Flight} from '../model/Flight'

export function searchFlight(departure: string, arrival: string, flights: Flight[]){
    return flights.filter(flight => (flight.departureAirportCode == departure && flight.arrivalAirportCode == arrival))
}

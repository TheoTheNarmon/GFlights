import axios, { AxiosResponse } from 'axios'
import {Flight} from '../model/Flight'
import { getFlights } from '../Controller/APIcontroller'
import { fromFlightDTO } from '../DTO/flightDTO'
import { Airport } from '../model/Airport'

export function searchFlight(departure: string, arrival: string, flights: Flight[]){
    return flights.filter(flight => (flight.departureAirportCode == departure && flight.arrivalAirportCode == arrival))
}


export async function getAllFlights(origin:Airport, destiny: Airport){
    return (await getFlights(origin,destiny)).map((flight)=>fromFlightDTO(flight))
}
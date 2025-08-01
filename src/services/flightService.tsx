import axios, { AxiosResponse } from 'axios'
import {Flight} from '../model/Flight'
import { getFlights } from '../Controller/APIcontroller'
import { fromFlightDTO } from '../DTO/flightDTO'

export function searchFlight(departure: string, arrival: string, flights: Flight[]){
    return flights.filter(flight => (flight.departureAirportCode == departure && flight.arrivalAirportCode == arrival))
}


export async function getAllFlights(){
    return (await getFlights()).map((flight)=>fromFlightDTO(flight))
}
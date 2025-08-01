import axios from 'axios';
import { AirportSearchResultDTO } from '../DTO/airportDTO';
import { FlightDTO } from '../DTO/flightDTO';
import { Airport } from '../model/Airport';

const API_KEY = '3d69ab4212mshf724c69eb30317ep107f75jsn7ec539557e03'
const Url = 'https://sky-scrapper.p.rapidapi.com'
const Host = 'sky-scrapper.p.rapidapi.com'


export const getAirports = async (): Promise<AirportSearchResultDTO[]> =>{
    const response = await axios.get('{Url}/api/v1/flights/searchAirport',{
        headers:{
            'X-RapidAPI-Key': '${API_KEY}',
            'X-RapidAPI-Host': '${Host}'

        }
    })
    return response.data
}

export const getFlights = async (): Promise<FlightDTO[]> =>{
    const response = await axios.get('{Url}/api/v2/flights/searchFlightEverywhere',{
        headers:{
            'X-RapidAPI-Key': '${API_KEY}',
            'X-RapidAPI-Host': '${Host}'
        }
    })
    return response.data
}
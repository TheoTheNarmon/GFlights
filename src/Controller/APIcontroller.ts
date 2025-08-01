import axios from 'axios';
import { AirportSearchResultDTO } from '../DTO/airportDTO';
import { FlightDTO } from '../DTO/flightDTO';
import { Airport } from '../model/Airport';
import { Code } from '@mui/icons-material';

const API_KEY = '3d69ab4212mshf724c69eb30317ep107f75jsn7ec539557e03'
const Url = 'https://sky-scrapper.p.rapidapi.com'
const Host = 'sky-scrapper.p.rapidapi.com'


export const getAirports = async (): Promise<AirportSearchResultDTO[]> =>{
    const response = await axios.get('{Url}/api/v1/flights/searchAirport',{
        headers:{
            'X-RapidAPI-Key': '${API_KEY}',
            'X-RapidAPI-Host': '${Host}'
        },
        params:{
            query: 'new',
            locale: 'en-US'
        }
    })
    console.log(response.data)
    return response.data
}

export const getFlights = async (origin: Airport, destiny: Airport): Promise<FlightDTO[]> =>{
    const response = await axios.get('{Url}/api/v2/searchFlights',{
        headers:{
            'X-RapidAPI-Key': '${API_KEY}',
            'X-RapidAPI-Host': '${Host}'
        },
        params:{
            originSkyId: origin.code,
            destinationSkyId: destiny,Code,
            originEntityId: origin.id,
            destinationEntityId: destiny.id,
            date: '2024-07-01' //random day
        }
    })
    console.log(response.data)
    return response.data
}
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Flight, Flights } from "../../model/Flight";
import { searchAirport } from "../../services/airportService";
import { Airport, Airports } from "../../model/Airport";
import { flattenDiagnosticMessageText } from "typescript";
import { searchFlight } from "../../services/flightService";
import FlightBox from "../../components/flight";
import SearchBox from "../../components/searchBox/searchBox";
import './search.css'

export default function Search(){
    const [airportOne, setAirportOne] = useState<Airport>()
    const [airportTwo, setAirportTwo] = useState<Airport>()
    const [flights, setFlights] = useState<Flight[]>([])

    useEffect(() =>{

        if(airportOne && airportTwo){
            setFlights(searchFlight(airportOne.code,airportTwo.code,Flights))
        }
    })


    const handleChangeAirport=(number:number,e:Airport) =>{
        if(number == 1){
            setAirportOne(e)
        }
        else{
            setAirportTwo(e)
        }
    }

    return(
        <div style={{justifyContent:'center', justifyItems:'center', marginTop:'1%'}}>

            <SearchBox
                airports={Airports}
                function={handleChangeAirport}
            />

            <div className="flightsGrid">
                {flights.map((flight)=>(
                    <FlightBox fly={flight}></FlightBox>
                ))}
            </div>
        </div>
    )
}
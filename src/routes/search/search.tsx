import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Flight, Flights } from "../../model/Flight";
import { searchAirport } from "../../services/airportService";
import { Airport, Airports } from "../../model/Airport";
import { flattenDiagnosticMessageText } from "typescript";
import { searchFlight } from "../../services/flightService";
import FlightBox from "../../components/flight";

export default function Search(){
    const [labelOne, setLabelOne] = useState("")
    const [labelTwo, setLabelTwo] = useState("")
    const [airportsOne, setAirportsOne] = useState<Airport[]>([])
    const [airportsTwo, setAirportsTwo] = useState<Airport[]>([])
    const [airportOne, setAirportOne] = useState<Airport>()
    const [airportTwo, setAirportTwo] = useState<Airport>()
    const [flights, setFlights] = useState<Flight[]>([])

    useEffect(() =>{
        if(labelOne == ""){setAirportsOne(Airports)}
        if(labelTwo == ""){setAirportsTwo(Airports)}

        if(airportOne && airportTwo){
            setFlights(searchFlight(airportOne.code,airportTwo.code,Flights))
        }
    })


    const handleChangeAirports=(number:number,e:string) => {
        if(number == 1){
            setLabelOne(e)
            setAirportsOne(searchAirport(labelOne,Airports))}
        else{
            setLabelTwo(e)
            setAirportsTwo(searchAirport(labelTwo,Airports))}
    }

    const handleChangeAirport=(number:number,e:Airport) =>{
        if(number == 1){
            setAirportOne(e)
        }
        else{
            setAirportTwo(e)
        }
    }

    return(
        <>
        <div style={{display:'flex'}}>
            <div >
            <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined"
                value={labelOne}
                onChange={(e) => handleChangeAirports(1,e.target.value)} 
                />
                {airportsOne.map((airport)=> (
                    <h1 onClick={() => handleChangeAirport(1,airport)}>{airport.name}</h1>
                ))}
            </div>

            <div>
            <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined"
                value={labelTwo}
                onChange={(e) => handleChangeAirports(2,e.target.value)} 
                />
                {airportsTwo.map((airport)=> (
                    <h1 onClick={() => handleChangeAirport(2,airport)}>{airport.name}</h1>
                ))}
            </div>
        </div>

        <div>
            <div style={{display:'flex'}}>
                <h2>{airportOne?.name}</h2>
                <h2>{airportTwo?.name}</h2>
            </div>
            {flights.map((flight)=>(
                <FlightBox fly={flight}></FlightBox>
            ))}
        </div>
        </>
    )
}
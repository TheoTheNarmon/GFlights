import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Flight } from "../../model/Flight";
import { getAllAirports, searchAirport } from "../../services/airportService";
import { Airport } from "../../model/Airport";
import { flattenDiagnosticMessageText } from "typescript";
import { getAllFlights, searchFlight } from "../../services/flightService";
import FlightBox from "../../components/flight";
import SearchBox from "../../components/searchBox/searchBox";
import './search.css'
import Header from "../../components/header/header";
import { useInitialize } from "../../hooks/hooks";

export default function Search(){
    const [airportOne, setAirportOne] = useState<Airport>()
    const [airportTwo, setAirportTwo] = useState<Airport>()
    const [flights, setFlights] = useState<Flight[]>([])

    const [Airports, setAirports] = useState<Airport[]>([])
    const [Flights, setAllFlights] = useState<Flight[]>([])

    useEffect(() =>{
        if(airportOne && airportTwo){
            setFlights(searchFlight(airportOne.code,airportTwo.code,Flights))
        }
    })

    useInitialize(async ()=>{
        setAirports(await getAllAirports())
        setAllFlights(await getAllFlights())
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

            <Header></Header>
            <div className="imageContainer">
                <img className="image" src="https://images.unsplash.com/photo-1596251822183-f0cf75473b67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"></img>
            </div>
            <SearchBox
                airports={Airports}
                function={handleChangeAirport}
            />

            <div className="flightsFlex">
                {flights.map((flight)=>(
                    <FlightBox fly={flight}></FlightBox>
                ))}
            </div>
        </div>
    )
}
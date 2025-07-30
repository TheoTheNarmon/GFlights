import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Flight, Flights } from "../../model/Flight";
import { searchAirport } from "../../services/airportService";
import { Airport, Airports } from "../../model/Airport";

export default function Search(){
    const [label, setLabel] = useState("")
    const [flights, setFlights] = useState<Flight[]>([])
    const [airports, setAirports] = useState<Airport[]>([])

    useEffect(() =>{
        setFlights(Flights);
        if(label == ""){setAirports(Airports)}
    })


    const handleChangeAirports= (e:string) => {
        setLabel(e)
        setAirports(searchAirport(label,Airports))
    }

    return(
        <div>
        <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined"
            value={label}
            onChange={(e) => handleChangeAirports(e.target.value)} 
            />
            {airports.map((airport)=> (
                <h1>{airport.name}</h1>
            ))}
        </div>
    )
}
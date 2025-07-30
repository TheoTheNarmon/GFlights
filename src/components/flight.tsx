import Box from "@mui/material/Box";
import { Flight } from "../model/Flight";

interface Props{
    fly:Flight;
}

export default function FlightBox(props:Props){
    return(
        <Box sx={{border:'10 black 10'}}>
            <h4>From: {props.fly.departureAirportName}</h4>
            <h4>For: {props.fly.arrivalAirportName}</h4>
            <h5>{props.fly.durationMinutes}min</h5>
        </Box>
    )
}
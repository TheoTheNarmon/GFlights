import Box from "@mui/material/Box";
import { Flight } from "../model/Flight";

interface Props{
    fly:Flight;
}

export default function FlightBox(props:Props){
    return(
        <Box sx={{display:'flex', width:'90%', height:'100px', justifyItems:'center', justifyContent:'center',alignItems:'center', gap:'1%', border:'1px solid black', borderRadius:'1rem', marginTop:'0.5%', backgroundColor:'darkgrey'}}>
            <h3>{props.fly.airline}</h3>
            <h3>{props.fly.departureTime}-{props.fly.arrivalTime}</h3>
            <h3>{props.fly.departureTime}min</h3>
            <h3>{props.fly.departureAirportName ?? props.fly.departureAirportCode} to {props.fly.arrivalAirportName ?? props.fly.arrivalAirportCode}</h3>
            <h3>${props.fly.price ?? '-'}</h3>
            <h3>{props.fly.status ?? ""}</h3>
        </Box>
    )
}
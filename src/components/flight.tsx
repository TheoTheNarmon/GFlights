import Box from "@mui/material/Box";
import { Flight } from "../model/Flight";

interface Props{
    fly:Flight;
}

export default function FlightBox(props:Props){
    return(
        <Box sx={{
            display:'flex', 
            width:'70%', 
            height:'100px', 
            justifyItems:'center', 
            justifyContent:'center',
            alignItems:'center', 
            gap:'1%', 
            border:'1px solid black', 
            borderRadius:'1rem', 
            marginTop:'0.5%', 
            backgroundColor:'rgb(56, 56, 56);'
            }}>
            <h2>{props.fly.airline}</h2>
            <h2>{props.fly.departureTime}-{props.fly.arrivalTime}</h2>
            <h2>{props.fly.departureTime}min</h2>
            <h2>{props.fly.departureAirportName ?? props.fly.departureAirportCode} to {props.fly.arrivalAirportName ?? props.fly.arrivalAirportCode}</h2>
            <h2>${props.fly.price ?? '-'}</h2>
            <h2>{props.fly.status ?? ""}</h2>
        </Box>
    )
}
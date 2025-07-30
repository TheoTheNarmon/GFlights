import React, { useState } from "react";
import { Airport } from "../../model/Airport";
//import './SearchBox.css'
import { Autocomplete, Box, TextField } from "@mui/material";


interface Props{
    airports: Airport[]
    function: (n:number, e: Airport) => void
}

export default function SearchBox(props: Props){
    const [airportOne, setAirportOne] = useState<Airport>()
    const [airportTwo, setAirportTwo] = useState<Airport>()

    function handleChange(n:number, a:Airport){
        if(n==1){
            setAirportOne(a)
        }
        else{
            setAirportTwo(a)
        }
        props.function(n,a)
    }

    return(
        <Box sx={
            {
            display: 'flex',
            backgroundColor:'grey',
            width:'50%', height:'100px',
            justifyContent:'center',
            justifySelf:'center',
            borderRadius: '8px',
            alignItems:'center',
            margin:'0 auto',
            gap:'10%',
            boxShadow: "0 1px 3px 0 rgba(0,0,0,.3),0 4px 8px 3px rgba(0,0,0,.15)",
            }}>

            <Autocomplete
            options={props.airports}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Departure" />}
            value={airportOne}
            getOptionLabel={(option)=>{return option.name;}}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(event: React.SyntheticEvent<Element, Event>,option: Airport | null) => {
                if(option){handleChange(1,option)}
            }}
            />
            <Autocomplete
            options={props.airports}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Arrival" />}
            value={airportTwo}
            getOptionLabel={(option)=>{return option.name;}}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(event: React.SyntheticEvent<Element, Event>,option: Airport | null) => {
                if(option){handleChange(2,option)}
            }}
            />
        </Box>
    )
}
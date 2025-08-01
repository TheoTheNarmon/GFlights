import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { isUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import './login.css'

export default function Login(){
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    function handleLogin(){
        if(!user || !password){
            setError("add params")
        }
        else{
            if(isUser(user,password)){
                navigate("/app")
            }
            else{
                setError("incorrects params")
            }
        }
    }

    return(
        <div className="loginContainer">
        <Box sx={{
            width:'400px',
            height:'400px',
            backgroundColor:'gray',
            boxShadow: "0 1px 3px 0 rgba(0,0,0,.3),0 4px 8px 3px rgba(0,0,0,.15)",
            borderRadius: '2rem'
        }}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', justifyItems:'center', justifySelf:'center', alignItems:'center'}}>
            <h1>Login</h1>
            {error != "" ? (
                <p style={{color:'red', margin:'0'}}>Error: {error}</p>
            ):(<div></div>)}
            <TextField sx={{width:'80%', margin:'10px'}} id="outlined-basic" label="User" variant="outlined" value={user} onChange={(e)=> setUser(e.target.value)} />
            <TextField sx={{width:'80%', margin:'10px'}} id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <Button sx={{width:'200px', height:'50px', marginTop:'30px'}} variant="contained" onClick={handleLogin}>Login</Button>
            </div>
        </Box>
        </div>
    )
}
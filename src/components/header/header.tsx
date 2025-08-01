import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInitialize } from "../../hooks/hooks";
import { User } from "../../model/User";
import { logOut } from "../../services/userService";



export default function Header(){
    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    useInitialize( async () => {
            const newUser = JSON.parse(localStorage.getItem('user')!) as User | null
            if(newUser){
                setUser(newUser)
            }
        })

    function handleLogOut(){
        logOut()
        setUser(undefined)
    }

    return(
        <Box
        sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            width:'100%',
            height:'100px',
            position:'fixed',
            border:'1% solid black',
            backgroundColor:'rgb(56, 56, 56);',
            top:'0',
            zIndex: 1000
        }}>
            <h1 style={{marginLeft:'1%'}}>Google Flight</h1>
            {user ?(
                <div style={{display:'flex', marginRight:'1%', alignItems:'center', gap:'0.5%'}}>
                    <Button sx={{width:'100px', marginRight:'20px'}} onClick={() => handleLogOut()}>log out</Button>
                    <h3 style={{width:'170px'}}>{user.firstname} {user.lastname}</h3>
                    <img style={{width:'30px',height:'30%', borderRadius:'25%'}}src={user.avatar}/>
                </div>
            ):(
                <Button variant="outlined" style={{marginRight:'1%'}} onClick={() => navigate("/login")}>login</Button>
            )}
        </Box>
    )
}
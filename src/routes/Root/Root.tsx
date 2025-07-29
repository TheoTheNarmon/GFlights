import { Navigate, Outlet } from "react-router-dom"
import { User } from "../../model/User"
import { createContext, useState } from "react"



type LoginState = [ User | null, React.Dispatch<React.SetStateAction<User | null>>]
export const sessionContext = createContext( {} as LoginState )


export default function Root() {
    const loginState = useState<User | null>(null)

    const [ user, setUser ] = loginState


    /*useInitialize( async () => {
        // const newUser = await loginService.getSignedUser()
        const newUser = JSON.parse(localStorage.getItem('user')!) as User | null
        setUser( newUser  )
    })*/


    return (
        <sessionContext.Provider value={ loginState }>
        <Outlet />
        {
            <Navigate to='flight' replace={ true } />
            /*user ? 
            <Navigate to='app/dashboard' replace={ true } /> :
            <Navigate to='login' replace={ true } />*/
        }
        </sessionContext.Provider>
    )
}


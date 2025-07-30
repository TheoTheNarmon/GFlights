import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "./login/Login";
import Search from "./search/search";
import Root from "./Root/Root";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> }>
        <Route path='login' element={ <Login/> } />
    
    <Route path='flight' element={ <Search/> } />

    </Route>
  )
) 
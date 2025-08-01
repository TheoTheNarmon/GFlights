import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "./login/Login";
import Search from "./search/search";
import Root from "./Root";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> }>
      <Route path='/login' element={ <Login/> } />
      <Route path='/app' element={<Search/>}/>

    </Route>
  )
) 
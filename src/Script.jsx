import { Routes, RouterProvider, BrowserRouter as Router, createRoutesFromElements as createRoutes, createBrowserRouter as createRouter, Route } from "react-router-dom"

const router = createRouter(
  
  createRoutes(<Route index element={ <h1>Home</h1> }/>)

)

const Script = () =>{

  return <RouterProvider router={router}/>

}

export default Script
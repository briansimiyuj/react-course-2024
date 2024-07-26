import { Routes, RouterProvider, BrowserRouter as Router, createRoutesFromElements as createRoutes, createBrowserRouter as createRouter, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./pages/JobsPage"

const router = createRouter(
  
  createRoutes(

    <Route path="/" element={<MainLayout/>}>

      <Route index element={<HomePage/>}/>

      <Route path="/jobs" element={<JobsPage/>}/>

    </Route>

  )

)

const Script = () =>{

  return <RouterProvider router={router}/>

}

export default Script
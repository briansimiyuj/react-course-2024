import { Routes, RouterProvider, BrowserRouter as Router, createRoutesFromElements as createRoutes, createBrowserRouter as createRouter, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./pages/JobsPage"
import NotFound from "./pages/NotFound"
import JobPage, { jobLoader } from "./pages/JobPage"
import AddJob from "./pages/AddJob"

const router = createRouter(
  
  createRoutes(

    <Route path="/" element={<MainLayout/>}>

      <Route index element={<HomePage/>}/>

      <Route path="/jobs" element={<JobsPage/>}/>

      <Route path="/add-job" element={<AddJob/>}/>
      
      <Route path="/job/:id" element={<JobPage/>} loader={jobLoader}/>

      <Route path="*" element={<NotFound/>}/>

    </Route>

  )

)

const Script = () =>{

  return <RouterProvider router={router}/>

}

export default Script
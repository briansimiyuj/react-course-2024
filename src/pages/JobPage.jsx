import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

const JobPage = () =>{

    const [job, setJob] = useState(null),
          [loading, setLoading] = useState(true),
          { id } = useParams()


    useEffect(() =>{
    
        const fetchJob = async() =>{
        
            try{
                
                const response = await fetch(`/api/jobs/${id}`), 
                      data = await response.json()

                setJob(data)

            }catch(error){

                console.error('Error fetching data', error)
                
            }finally{

                setLoading(false)

            }
        
        }

        fetchJob()
    
    }, [])

    return loading ? <Spinner/> : <h1>{job.title}</h1>

}

export default JobPage
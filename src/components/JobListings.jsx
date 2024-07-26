import { useEffect, useState } from "react"
import jobs from "../jobs.json"
import JobListing from "./JobListing"

const JobListings = ({ isHomePage }) =>{

    const [jobs, setJobs] = useState([]),
          [loading, setLoading] = useState(true)


    useEffect(() =>{
    
        const fetchJobs = async() =>{
        
            try{
                
                const response = await fetch("http://localhost:8000/jobs"),
                data = await response.json()

                setJobs(data)

            }catch(error){

                console.error('Error fetching data', error)
                
            }finally{

                setLoading(false)

            }
        
        }

        fetchJobs()
    
    }, [])

    return(

        <section className="bg-blue-50 px-4 py-10">

            <div className="container-xl lg:container m-auto">
            
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">{ isHomePage ? 'Recent Job' : 'Browse Jobs' }</h2>
               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                

                    {

                        loading ? <h2 className="text-center">Loading...</h2> :

                        <>

                            {
                                jobs.map(job =>{
                                    
                                    return(
                                    
                                        <JobListing key={job.id} job={job}/>

                                    )

                                })

                            }

                        </>

                    }
                    
                </div>
            </div>

      </section>

    )

}

export default JobListings
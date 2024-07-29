import { useLoaderData, useParams } from "react-router-dom"

const JobPage = () =>{

    const { id } = useParams(),
           job = useLoaderData()


    return <h1>{job.title}</h1>

}


const jobLoader = async({ params }) =>{

    const response = await fetch(`/api/jobs/${params.id}`),
         data = await response.json()

    return data

}

export { JobPage as default, jobLoader }
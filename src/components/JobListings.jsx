// import jobs from "../jobs.json"
import JobListing from "./JobListing"
import Spinner from "./Spinner"

import {useState, useEffect} from "react"

//NOTE TO ME: list needs a key to be paassed on so u need to pass the key as prop to the job list. <JobListing key={job.id} job={job}/>
//Key has to be unique, it can be the id or idx sometimes

const JobListings = ({isHome = false}) => {
  //const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([])
  //showing spinner when it's fectching data
  const [loading, setLoading] = useState(true)

  //  useEffect(()=> {}, []). So, everytime the variable inside the square bracket changes, use effect runs. If no varibale keep the sqaure bracket otherwise it will run in a infinite loop
  useEffect(()=> {
    //for the asynchrous access we need this func
    const fetchJobs = async() => {
      //for only showing recent jobs in website
      //WE need to add a proxy in vite.config file so te url is not hardcoded to this and when we host in server, it will help
      const apiURL = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
      try {
        const res = await fetch(apiURL)
        const data = await res.json()
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data")
      }
      finally {
        setLoading(false)
      }
      
    }

    fetchJobs()

  }, [])

  return (
     <section className="bg-blue-50 px-4 py-10">
     <div className="container-xl lg:container m-auto">
       <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {isHome ? "Recent Jobs" : "Browse Jobs"}
       </h2>
       
        {loading ? (<Spinner loading={loading}/> ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
          <JobListing key={job.id} job={job}/>
        ))}
        </div>
        )}
        
     </div>
   </section>
  )
}

export default JobListings
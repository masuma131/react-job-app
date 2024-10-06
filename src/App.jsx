import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import SignOutPage from './pages/SignOutPage'

//:id represent it's variable for whatever the id is (passes in Link url like here from JobPage)

const App = () => {
  
const addJob = async (newJob) => {
  //Add new job
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  })
  return
}

//Delete job
const deleteJob = async (id) => {
  console.log("delete", id)
  //Add new job
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  })
  return
}

//Update Job
const updateJob = async (updatedJob) => {
  //Add new job
  const res = await fetch(`/api/jobs/${updatedJob.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedJob)
  })
  return
}

const router = createBrowserRouter(

  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>

    <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
    <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
    
    <Route path='*' element={<NotFoundPage/>}/>
    <Route path='/sign-up' element={<SignUpPage/>}/>
    <Route path='/sign-in' element={<SignInPage/>}/>
    <Route path='/sign-out' element={<SignOutPage/>}/>
    
  </Route>
      
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App
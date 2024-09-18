//Outlet: Whatever page you are on, the page will come through the outlet. Basically show that comtent in the outlet.
//basically show whatever that is in the page we are


import { Outlet } from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"
import NavBar from "../components/Navbar"

const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default MainLayout
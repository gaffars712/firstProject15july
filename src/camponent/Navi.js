import React from "react"
import { Link } from "react-router-dom";


 const Navi=(props)=>  {
  
  
  const darkmode = ()=>{
    console.log("cheng mod");
    document.body.style = 'background:black';
    document.getElementById("h1color").style = 'color:white'
   
  }
  const darkmode11 =()=>{
    document.body.style = 'background:white';
    document.getElementById("h1color").style = 'color:black'

    

  }
   
    return (    <>

      <nav className=" navbar navbar-expand-lg navbar-primary fixed-top bg-dark w-100">
      <Link className="navbar-brand" to="/">Navbar</Link>
     
      <div className="" id="navbarNav">
        <ul className="navbar-nav">
                       <li className="nav-item "> <Link className="nav-link" to="/firstProject15july/business"> Business </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/firstProject15july/Entertainment"> Entertainment </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/firstProject15july/home"> General </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/firstProject15july/Health"> Health </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/firstProject15july/Science"> Science </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/firstProject15july/Sports"> Sports </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/firstProject15july/Technology"> Technology </Link> </li>
        </ul>
      </div>
      <div >
      <button data-bs-toggle="tooltip" title="Dark Mode" data-bs-placement ="top" type="button" style={{width:"2rem",height:"2rem",background:"black", margin:"0 1rem "}} onClick={darkmode}></button>
      <button data-bs-toggle = "tooltip" title="White Mode" databs-placement = "buttom" type="button" style={{width:"2rem",height:"2rem",background:"whtie", margin:"0 1rem "}} onClick={darkmode11}></button>
      </div>

    </nav>


      </> )
  
}
export default Navi;
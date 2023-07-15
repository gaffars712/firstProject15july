import React from "react"
import { Link } from "react-router-dom";


export default class Navi extends React.Component {
  
  
  darkmode = ()=>{
    console.log("cheng mod");
      document.getElementById("h1color").style =' color:white'
    document.body.style = 'background:black'
   
  }
  darkmode11 =()=>{
    document.getElementById("h1color").style =' color:black'
    

  document.body.style='background:white'

  }
  render() {
   
    return (<>    
      <nav className=" navbar navbar-expand-lg navbar-primary bg-dark w-100">
      <Link className="navbar-brand" to="/">Navbar</Link>
     
      <div className="" id="navbarNav">
        <ul className="navbar-nav">
                       <li className="nav-item "> <Link className="nav-link" to="/business"> Business </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/Entertainment"> Entertainment </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/home"> General </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/Health"> Health </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/Science"> Science </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/Sports"> Sports </Link> </li>
                       <li className="nav-item "> <Link className="nav-link" to="/Technology"> Technology </Link> </li>
        </ul>
      </div>
      <div >
      <button data-bs-toggle="tooltip" title="Dark Mode" data-bs-placement ="top" type="button" style={{width:"2rem",height:"2rem",background:"black", margin:"0 1rem "}} onClick={this.darkmode}></button>
      <button data-bs-toggle = "tooltip" title="White Mode" databs-placement = "buttom" type="button" style={{width:"2rem",height:"2rem",background:"whtie", margin:"0 1rem "}} onClick={this.darkmode11}></button>
      </div>

    </nav>

<h1 className=" text-center my-3 " id="h1color" >News Monkey</h1>

</>
 )
  }
}


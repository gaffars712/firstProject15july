import './App.css';
import Navi from "./camponent/Navi";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import LoadingBar from 'react-top-loading-bar'
import Cardcamponent from './camponent/Cardcamponent'
import React, { Component } from 'react'
 

export default class App extends Component {
 state = {progress :0,}

    progressbar=(progress) =>{
      this.setState({progress:progress})
    }
  render() {
    return (
      
         <div>
  

  <BrowserRouter>
  <Navi/>

  <LoadingBar
     color='#f11946'
     progress={this.state.progress}
     height={3}
    
   />
 
   <Routes>
   <Route path="/" element={  <Cardcamponent progressbar = {this.progressbar}    key={"general"}  catogry = "general"/>}></Route>
     <Route path="/home" element={  <Cardcamponent progressbar = {this.progressbar}     key={"general"}  catogry = "general"/>}></Route>
     <Route path="/business" element={  <Cardcamponent progressbar = {this.progressbar}     key={"business"} catogry = "business"/>}></Route>
     <Route path="/Entertainment" element={  <Cardcamponent progressbar = {this.progressbar}     key={"Entertainment"} catogry = "Entertainment"/>}></Route>
     <Route path="/Health" element={  <Cardcamponent progressbar = {this.progressbar}     key={"Health"} catogry = "Health"/>}></Route>
     <Route path="/Science" element={  <Cardcamponent progressbar = {this.progressbar}     key={"Science"}catogry = "Science"/>}></Route>
     <Route path="/Sports" element={  <Cardcamponent progressbar = {this.progressbar}     key={"sports"} catogry = "sports"/>}></Route>
     <Route path="/Technology" element={  <Cardcamponent progressbar = {this.progressbar}     key={"Technology"} catogry = "Technology"/>}></Route>

   </Routes>
 </BrowserRouter>
  
 
 
 </div>
        
      
    )
  }
}


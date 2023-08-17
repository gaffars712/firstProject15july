import './App.css';
import Navi from "./camponent/Navi";
import { BrowserRouter, Routes, Route, } from "react-router-dom"; 

import LoadingBar from 'react-top-loading-bar'
import Cardcamponent from './camponent/Cardcamponent'
import React, { useState } from 'react'
  

const App = ()=> {
 
 const [progress, setprogress] = useState(0)
 const apikey="cd424eb4910340fc81bc4578e4a86d86" 

    
  
    return (
      
         <div>
  

  <BrowserRouter>
  <Navi/>

  <LoadingBar
     color='#f11946'
     progress={progress}
     height={3}
    
   />
 
   <Routes>
   <Route path="/" element={  <Cardcamponent  apikey = {apikey}  progressbar = {setprogress}    key={"general"}  catogry = "general"/>}></Route>
     <Route path="/firstProject15july/home" element={  <Cardcamponent apikey = {apikey} progressbar = {setprogress}     key={"general"}  catogry = "general"/>}></Route>
     <Route path="/firstProject15july/business" element={  <Cardcamponent apikey = {apikey} progressbar = {setprogress}     key={"business"} catogry = "business"/>}></Route>
     <Route path="/firstProject15july/Entertainment" element={  <Cardcamponent apikey = {apikey} progressbar = {setprogress}     key={"Entertainment"} catogry = "Entertainment"/>}></Route>
     <Route path="/firstProject15july/Health" element={  <Cardcamponent apikey = {apikey} progressbar = {setprogress}     key={"Health"} catogry = "Health"/>}></Route>
     <Route path="/firstProject15july/Science" element={  <Cardcamponent apikey = {apikey} progressbar = {setprogress}     key={"Science"}catogry = "Science"/>}></Route>
     <Route path="/firstProject15july/Sports" element={  <Cardcamponent apikey = {apikey} progressbar = {setprogress}     key={"sports"} catogry = "sports"/>}></Route>
     <Route path="/firstProject15july/Technology" element={  <Cardcamponent apikey = {apikey} progressbar = {setprogress}     key={"Technology"} catogry = "Technology"/>}></Route>

   </Routes>
 </BrowserRouter>
  
 
 
 </div>
        
      
    )
  
}

export default App;
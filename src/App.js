import './App.css';
import Navi from "./camponent/Navi";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Cardcamponent from './camponent/Cardcamponent'
function App() {
  return (
    <div><>

     <BrowserRouter>
     <Navi/>

      <Routes>
      <Route path="/" element={<Cardcamponent key={"general"}  catogry = "general"/>}></Route>
        <Route path="/home" element={<Cardcamponent key={"general"}  catogry = "general"/>}></Route>
        <Route path="/business" element={<Cardcamponent key={"business"} catogry = "business"/>}></Route>
        <Route path="/Entertainment" element={<Cardcamponent key={"Entertainment"} catogry = "Entertainment"/>}></Route>
        <Route path="/Health" element={<Cardcamponent key={"Health"} catogry = "Health"/>}></Route>
        <Route path="/Science" element={<Cardcamponent key={"Science"}catogry = "Science"/>}></Route>
        <Route path="/Sports" element={<Cardcamponent key={"sports"} catogry = "sports"/>}></Route>
        <Route path="/Technology" element={<Cardcamponent key={"Technology"} catogry = "Technology"/>}></Route>

      </Routes>
    </BrowserRouter>
     
    
    </>
    </div>
  );
}

export default App;

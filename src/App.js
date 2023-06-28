import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/index';
import Main from "./pages/Mainstart";
import Signup from "./pages/Signuping"
import Sidenav from './sidenav/Sidenav';
import Reserve from "./pages/Reserve";
import Check from "./pages/Checkinout";
import Service from "./pages/FreeCharge";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div> <Navbar /> <Main /></div>} />
        <Route path="/Signup" element={ <div> <Navbar /> <Signup /></div>}/>
        <Route path="/Reserve" element={ <div> <Sidenav /> <Reserve /></div>}/>
        <Route path="/Check" element={ <div> <Sidenav props={1}/> <Check /></div>}/>
        <Route path="/Service" element={ <div> <Sidenav /> <Service /></div>}/>
        <Route path="/Detail" element={ <div> <Sidenav /> <Detail /></div>}/>
      </Routes>
    </Router>
  );
}

export default App;
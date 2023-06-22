import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/index';
import Main from "./pages/Mainstart";
import Signup from "./pages/Signuping"
import Reserve from "./pages/Reserve"
import Sidenav from './sidenav/Sidenav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div> <Navbar /> <Main /></div>} />
        <Route path="/Signup" element={ <div> <Navbar /> <Signup /></div>}/>
        <Route path="/Reserve" element={ <div> <Sidenav/> <Reserve /></div>}/>
      </Routes>
    </Router>
  );
}

export default App;